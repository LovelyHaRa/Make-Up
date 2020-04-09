import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  padding: 0, 1rem;
  width: 986px;
  margin: 0 auto;

  @media screen and (max-width: 1024px) {
    width: 748px;
  }
  @media screen and (max-width: 768px) {
    width: 98%;
  }
`;

const Responsive = ({ children, ...rest }) => {
  return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
