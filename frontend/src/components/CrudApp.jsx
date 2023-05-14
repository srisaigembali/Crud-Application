import React from 'react';
import { styled } from '@mui/material';

const MyComponent = styled('div')({
  color: 'darkslategray',
  backgroundColor: 'aliceblue',
  fontSize: '20px',
  padding: 10,
  paddingLeft: '50px',
  borderRadius: 4,
});

const CrudApp = () => {
  return (
    <>
      <MyComponent>Hello from CrudApp</MyComponent>
    </>
  );
};

export default CrudApp;
