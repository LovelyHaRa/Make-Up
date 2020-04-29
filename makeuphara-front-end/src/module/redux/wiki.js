import { createAction, handleActions } from 'redux-actions';
import {
  createRequestActionTypes,
  createRequestSaga,
} from '../../lib/createRequest';
import * as wikiAPI from '../../lib/api/wiki';
import { takeLatest } from 'redux-saga/effects';

/* action type */
// api - request list
const [
  GET_REQUEST_LIST,
  GET_REQUEST_LIST_SUCCESS,
  GET_REQUEST_LIST_FAILURE,
] = createRequestActionTypes('wiki/GET_REQUEST_LIST');
// edit - set title
const SET_TITLE = createRequestActionTypes('wiki/SET_TITLE');
// edit - initialize
const INITIALIZE = 'wiki/INITIALIZE';
// edit - change field
const CHANGE_FIELD = 'wiki/CHANGE_FIELD';
// edit - write document
const [
  WRITE_DOCUMENT,
  WRITE_DOCUMENT_SUCCESS,
  WRITE_DOCUMENT_FAILURE,
] = createRequestActionTypes('wiki/WRITE_DOCUMENT');
// api - read
const [
  READ_DOCUMENT,
  READ_DOCUMENT_SUCCESS,
  READ_DOCUMENT_FAILURE,
] = createRequestActionTypes('wiki/READ_DOCUMENT');
const UNLOAD_DOCUMENT = 'wiki/UNLOAD_DOCUMENT'; // 위키 문서 뷰 언마운트시 문서 정보 제거
const SET_ORIGINAL_DOCUMENT = 'wiki/SET_ORIGINAL_DOCUMENT'; // 위키 문서 편집 시 에디터에 문서 세팅
// api - list
const [
  GET_DOCUMENT_LIST,
  GET_DOCUMENT_LIST_SUCCESS,
  GET_DOCUMENT_LIST_FAILURE,
] = createRequestActionTypes('wiki/GET_DOCUMENT_LIST');
const UNLOAD_LIST = 'wiki/UNLOAD_LIST'; // 위키 리스트 뷰 언마운트시 document list 정보 제거
// api - history list
const [
  GET_HISTORY_LIST,
  GET_HISTORY_LIST_SUCCESS,
  GET_HISTORY_LIST_FAILURE,
] = createRequestActionTypes('wiki/GET_HISTORY_LIST');
// api - search
const [
  GET_SEARCH_LIST,
  GET_SEARCH_LIST_SUCCESS,
  GET_SEARCH_LIST_FAILURE,
] = createRequestActionTypes('wiki/GET_SEARCH_LIST');
// api- search/direct
const [
  GET_DIRECT_TITLE,
  GET_DIRECT_TITLE_SUCCESS,
  GET_DIRECT_TITLE_FAILURE,
] = createRequestActionTypes('wiki/GET_DIRECT_TITLE');

/* action */
export const getRequestList = createAction(GET_REQUEST_LIST);
export const setTitle = createAction(SET_TITLE, (title) => title);
export const initialize = createAction(INITIALIZE);
export const changeField = createAction(CHANGE_FIELD, ({ key, value }) => ({
  key,
  value,
}));
export const writeDocument = createAction(WRITE_DOCUMENT, ({ id, body }) => ({
  id,
  body,
}));
export const readDocument = createAction(READ_DOCUMENT, ({ id, r }) => ({
  id,
  r,
}));
export const unloadDocument = createAction(UNLOAD_DOCUMENT);
export const setOriginalDocument = createAction(
  SET_ORIGINAL_DOCUMENT,
  (document) => document,
);
export const getDocumentList = createAction(
  GET_DOCUMENT_LIST,
  (block) => block,
);
export const unloadList = createAction(UNLOAD_LIST);
export const getHistoryList = createAction(GET_HISTORY_LIST, ({ id }) => ({
  id,
}));
export const getSearchList = createAction(GET_SEARCH_LIST, ({ query }) => ({
  query,
}));
export const getDirectTitle = createAction(GET_DIRECT_TITLE, ({ query }) => ({
  query,
}));

/* redux-saga */
const getRequestListSaga = createRequestSaga(
  GET_REQUEST_LIST,
  wikiAPI.requestDocument,
);
const writeDocumentSaga = createRequestSaga(
  WRITE_DOCUMENT,
  wikiAPI.writeDocument,
);
export const readDocumentSaga = createRequestSaga(
  READ_DOCUMENT,
  wikiAPI.readDocument,
);
export const getDocumentListSaga = createRequestSaga(
  GET_DOCUMENT_LIST,
  wikiAPI.getDocumentList,
);
export const getHistoryListSaga = createRequestSaga(
  GET_HISTORY_LIST,
  wikiAPI.getHistoryList,
);
export const getSearchListSaga = createRequestSaga(
  GET_SEARCH_LIST,
  wikiAPI.getSearchList,
);
export const getDirectTitleSaga = createRequestSaga(
  GET_DIRECT_TITLE,
  wikiAPI.getDirectTitle,
);

export function* wikiSaga() {
  yield takeLatest(GET_REQUEST_LIST, getRequestListSaga);
  yield takeLatest(WRITE_DOCUMENT, writeDocumentSaga);
  yield takeLatest(READ_DOCUMENT, readDocumentSaga);
  yield takeLatest(GET_DOCUMENT_LIST, getDocumentListSaga);
  yield takeLatest(GET_HISTORY_LIST, getHistoryListSaga);
  yield takeLatest(GET_SEARCH_LIST, getSearchListSaga);
  yield takeLatest(GET_DIRECT_TITLE, getDirectTitleSaga);
}

/* initialize state */
const initialState = {
  title: null,
  titleError: null,
  body: '',
  document: null,
  documentError: null,
  editDocument: null,
  editDocumentError: null,
  requestList: [],
  requestListError: null,
  documentList: null,
  documentListError: null,
  historyList: null,
  historyListError: null,
  query: '',
  searchList: null,
  searchListError: null,
  directName: null,
  directError: null,
};

/* reducer */
const wiki = handleActions(
  {
    [GET_REQUEST_LIST_SUCCESS]: (state, { payload: requestList }) => ({
      ...state,
      requestList,
    }),
    [GET_REQUEST_LIST_FAILURE]: (state, { payload: requestListError }) => ({
      ...state,
      requestListError,
    }),
    [SET_TITLE]: (state, { payload: title }) => ({
      ...state,
      title,
    }),
    [INITIALIZE]: (state) => ({
      ...state,
      title: null,
      titleError: null,
      body: '',
      editDocument: null,
      editDocumentError: null,
    }),
    [CHANGE_FIELD]: (state, { payload: { key, value } }) => ({
      ...state,
      [key]: value, // 특정 키 값을 업데이트
    }),
    [WRITE_DOCUMENT_SUCCESS]: (state, { payload: editDocument }) => ({
      ...state,
      editDocument,
    }),
    [WRITE_DOCUMENT_FAILURE]: (state, { payload: editDocumentError }) => ({
      ...state,
      editDocumentError,
    }),
    [READ_DOCUMENT_SUCCESS]: (state, { payload: document }) => ({
      ...state,
      document,
    }),
    [READ_DOCUMENT_FAILURE]: (state, { payload: documentError }) => ({
      ...state,
      documentError,
    }),
    [UNLOAD_DOCUMENT]: (state) => ({
      ...state,
      document: null,
      documentError: null,
    }),
    [SET_ORIGINAL_DOCUMENT]: (state, { payload: document }) => ({
      ...state,
      title: document.title,
      body: document.body,
      editDocument: null,
      editDocumentError: null,
    }),
    [GET_DOCUMENT_LIST_SUCCESS]: (state, { payload: documentList }) => ({
      ...state,
      documentList,
    }),
    [GET_DOCUMENT_LIST_FAILURE]: (state, { payload: documentError }) => ({
      ...state,
      documentError,
    }),
    [UNLOAD_LIST]: (state) => ({
      ...state,
      documentList: null,
      documentListError: null,
    }),
    [GET_HISTORY_LIST_SUCCESS]: (state, { payload: historyList }) => ({
      ...state,
      historyList,
    }),
    [GET_HISTORY_LIST_FAILURE]: (state, { payload: historyListError }) => ({
      ...state,
      historyListError,
    }),
    [GET_SEARCH_LIST_SUCCESS]: (state, { payload: documentList }) => ({
      ...state,
      documentList,
    }),
    [GET_SEARCH_LIST_FAILURE]: (state, { payload: documentListError }) => ({
      ...state,
      documentListError,
    }),
    [GET_DIRECT_TITLE_SUCCESS]: (state, { payload: document }) => ({
      ...state,
      directName: document.title.name,
    }),
    [GET_DIRECT_TITLE_FAILURE]: (state, { payload: directError }) => ({
      ...state,
      directError,
    }),
  },
  initialState,
);

export default wiki;
