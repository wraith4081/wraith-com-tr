import React from 'react';
import { useRoutes } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import routes from 'routes';

function App() {
  return (
    <>
      <Toaster position='top-right' containerStyle={{ inset: 0, right: 16 }} />
      {useRoutes(routes as any)}
    </>
  );
}

export default App;