import Joi from '@hapi/joi';
import Document, { WikiTitle } from '../../database/models/document';
import mongoose from 'mongoose';
import sanitizeHtml from 'sanitize-html';
import SanitizeOption from '../../lib/sanitize-html/SanitizeOption';

export const getTitleById = async (ctx, next) => {
  // 1. 파라미터 추출
  const { id } = ctx.params;
  // 2. ObjectId 검증
  const { ObjectId } = mongoose.Types;
  if (!ObjectId.isValid(id)) {
    ctx.status = 400;
    return;
  }
  try {
    // 3. 데이터베이스 검색
    const title = await WikiTitle.findById(id); // 타이틀 검색
    if (!title) {
      ctx.status = 404; // Not Found
      return;
    }
    // 4. 컨텍스트에 타이틀 삽입
    ctx.state.wikititle = title.toJSON(); // 타이틀 상태 저장
    return next(); // 다음 미들웨어 호출
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getTitleByName = async (ctx, next) => {
  // 1. 파라미터 추출
  const { id } = ctx.params;
  try {
    // 2. 데이터베이스 검색
    const title = await WikiTitle.findByName(id); // 타이틀 검색
    if (!title) {
      ctx.status = 404; // Not Found
      return;
    }
    // 3. 컨텍스트에 타이틀 삽입
    ctx.state.wikititle = title.toJSON(); // 타이틀 상태 저장
    return next(); // 다음 미들웨어 호출
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getTitle = async (ctx) => {
  ctx.body = ctx.state.wikititle;
};

export const readDocument = async (ctx) => {
  const { _id, lately } = ctx.state.wikititle;
  let revision = lately;
  if (ctx.query.r) {
    revision = parseInt(ctx.query.r, 10);
  }
  try {
    const document = await Document.findOne({
      title: _id,
      revision: revision,
    }).populate('title');
    ctx.body = document;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const write = async (ctx) => {
  /* validate */
  const schema = Joi.object().keys({
    body: Joi.string().required(),
  });
  /* validate result */
  const result = schema.validate(ctx.request.body);
  /* validate failure */
  if (result.error) {
    ctx.status = 400;
    ctx.body = result.error;
    return;
  }
  /* data push */
  try {
    const { _id, name, lately } = { ...ctx.state.wikititle };
    const { body } = ctx.request.body;
    const processBody = sanitizeHtml(body, SanitizeOption);
    const documentLength = processBody.length;
    const title = await WikiTitle.findByIdAndUpdate(
      _id,
      { lately: lately + 1, updateDate: Date.now(), documentLength },
      { new: true },
    );
    const revision = title._doc.lately;
    const document = new Document({
      title: _id,
      body: processBody,
      publisher: ctx.state.user,
      revision,
    });
    await document.save();
    document._doc.name = name;
    ctx.body = document;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const requestDocument = async (ctx) => {
  try {
    const titleList = await WikiTitle.find({ lately: 0 }).lean();
    ctx.body = titleList.map((title) => ({
      ...title,
      name:
        title.name.length < 50 ? title.name : `${title.name.slice(0, 50)}...`,
    }));
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const addTitle = async (ctx) => {
  const { name } = ctx.request.body;
  if (!name) {
    ctx.status = 400;
    return;
  }
  const title = new WikiTitle({
    name,
    lately: 0,
  });
  try {
    await title.save();
    ctx.body = title;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getList = async (ctx) => {
  const block = parseInt(ctx.query.block || '10', 10);
  try {
    const documentList = await Document.find()
      .sort({ _id: -1 })
      .populate('title')
      .limit(block)
      .lean();
    ctx.body = documentList.filter(
      (document) => document.title.lately === document.revision,
    );
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getHistory = async (ctx) => {
  const { _id } = ctx.state.wikititle;
  try {
    const documentList = await Document.find({ title: _id })
      .sort({ _id: -1 })
      .populate('title');
    ctx.body = documentList;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const searchDocument = async (ctx, next) => {
  let { query, oldest, shortest, longest } = ctx.query;
  if (query === undefined) {
    query = '';
  }
  let sortObj = { updateDate: -1 };
  if (oldest && oldest === 'true') {
    sortObj.updateDate = 1;
  }
  if (shortest && shortest === 'true') {
    sortObj.documentLength = 1;
    delete sortObj.updateDate;
  } else if (longest && longest === 'true') {
    sortObj.documentLength = -1;
    delete sortObj.updateDate;
  }
  try {
    const documentList = await WikiTitle.find({
      name: { $regex: '.*' + query + '.*' },
      lately: { $gt: 0 },
    })
      .sort(sortObj)
      .lean();
    ctx.body = documentList;
    const reqUrl = ctx.request.url;
    const isNext = reqUrl.indexOf('/direct');

    if (isNext !== -1) {
      ctx.state.wikititle = documentList[0]; // 타이틀 상태 저장
      return next();
    }
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getRandomDocument = async (ctx) => {
  try {
    let randomNum = 0;
    await WikiTitle.countDocuments().then((count) => {
      randomNum = Math.floor(Math.random() * count);
    });
    const title = await WikiTitle.findOne().skip(randomNum);
    ctx.body = title;
  } catch (error) {
    ctx.throw(500, error);
  }
};

export const getDocumentCount = async (ctx) => {
  const { username } = ctx.request.body;
  const query = { 'publisher.username': username };
  try {
    const documentCount = await Document.countDocuments(query);
    ctx.body = documentCount;
  } catch (error) {
    ctx.throw(500, error);
  }
};
