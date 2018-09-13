import React from 'react';
import styled from 'styled-components';

const StyledLayout = styled.div`
  margin: 0 auto;
  max-width: 90%;
  padding: 2em;
`;

const Layout = ({ children }) => {
  return (
    <StyledLayout>
      <h1>Costume Inventory</h1>
      {children}
    </StyledLayout>
  );
};

export default Layout;
