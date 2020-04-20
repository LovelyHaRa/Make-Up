import React from 'react';
import styled from 'styled-components';
import Responsive from '../common/Responsive';
import { Helmet } from 'react-helmet-async';
import SubInfo from './common/SubInfo';
import Tags from './common/Tags';

const PostViewerBlock = styled(Responsive)`
  margin-top: 3rem;
`;

const PostHead = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.postBorder};
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    color: ${({ theme }) => theme.text};
  }
`;

const PostContent = styled.div`
  color: ${({ theme }) => theme.text};
  .ql-video {
    margin: 0 1%;
    width: 98%;
    height: 570px;
  }
  @media screen and (max-width: 1024px) {
    .ql-video {
      height: 400px;
    }
  }
`;

const PostViewer = ({ post, loading, error, actionButtons }) => {
  // 에러 처리
  if (error) {
    if (error.response && error.response.status === 404) {
      return (
        <PostViewerBlock>
          <PostContent>존재하지 않는 포스트입니다.</PostContent>
        </PostViewerBlock>
      );
    } else {
      return (
        <PostViewerBlock>
          <PostContent>
            Status {error.response.status}: {error.response.statusText}
          </PostContent>
        </PostViewerBlock>
      );
    }
  }
  // 로딩 중이거나 아직 포스트 데이터가 없을 때
  if (loading || !post) {
    return null;
  }
  // 렌더링 데이터
  const { title, body, tags, publisher, publishedDate } = post;
  return (
    <PostViewerBlock>
      <Helmet>
        <title>{title} - MAKE UP HARA</title>
      </Helmet>
      <PostHead>
        <h1>{title}</h1>
        <SubInfo
          hasMarginTop
          username={publisher.username}
          publishedDate={publishedDate}
        />
        <Tags tags={tags} />
      </PostHead>
      <PostContent dangerouslySetInnerHTML={{ __html: body }} />
      {actionButtons}
    </PostViewerBlock>
  );
};

export default PostViewer;