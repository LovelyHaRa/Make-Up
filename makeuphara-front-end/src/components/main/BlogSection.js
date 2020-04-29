import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Tags from '../post/common/Tags';
import SubInfo from '../post/common/SubInfo';

const BlogSectionBlock = styled.div`
  h3 {
    font-weight: 500;
  }
  & > span {
    display: flex;
    justify-content: flex-end;
    margin-top: 0.5rem;
    & > a:hover {
      color: ${({ theme }) => theme.hoverText};
    }
  }
`;

const PostBlock = styled.div`
  display: flex;
  align-items: center;
  border-top: 1px solid ${({ theme }) => theme.postBorder};
  padding: 0.5rem 0.25rem;
  &:last-of-type {
    border-bottom: 1px solid ${({ theme }) => theme.postBorder};
  }
  .tags,
  .subinfo {
    margin: 0;
    display: flex;
  }
  a {
    display: flex;
  }
  flex: none;
  .post-info {
    margin-left: auto;
    display: flex;
    align-items: center;
    .tags + .subinfo {
      margin-left: 1rem;
    }
  }
  &:hover {
    background: ${({ theme }) => theme.hoverList};
  }
`;

const PostItem = ({ post }) => {
  const { _id, title, tags, publisher } = post;
  return (
    <PostBlock>
      <Link to={`/blog/@${publisher.username}/${_id}`}>{title}</Link>
      <div className="post-info">
        <Tags tags={tags} limit={3} />
        <SubInfo username={publisher.username} />
      </div>
    </PostBlock>
  );
};

const BlogSection = ({ postList, loading, postError }) => {
  if (postError) {
    return (
      <BlogSectionBlock>
        <span className="title">에러가 발생했습니다.</span>
      </BlogSectionBlock>
    );
  }
  return (
    <BlogSectionBlock>
      <h3>블로그</h3>
      {!loading && postList && (
        <div>
          {postList.map((post) => (
            <PostItem post={post} key={post._id} />
          ))}
        </div>
      )}
      <span>
        <Link to="/blog">MORE POST...</Link>
      </span>
    </BlogSectionBlock>
  );
};

export default BlogSection;