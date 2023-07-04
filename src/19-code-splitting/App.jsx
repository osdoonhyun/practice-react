import React, { Suspense, useState } from 'react';
import notify from './notify';
const SplitMe = React.lazy(() => import('./SplitMe'));

export default function App() {
  const [visible, setVisible] = useState(false);
  const onClick = () => {
    setVisible(true);
  };

  return (
    <div className='App'>
      <header className='App-header'>
        <img className='App-logo' alt='logo' />
        <p onClick={onClick}>Hello React!</p>
        <Suspense fallback={<div>loading...</div>}>
          {visible && <SplitMe />}
        </Suspense>
      </header>
    </div>
  );
}
