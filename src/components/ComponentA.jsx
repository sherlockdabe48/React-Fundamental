import React from 'react';
import useIsMobile from '../hooks/useIsMobile';

function ComponentA() {
  const isMobile = useIsMobile()

  return <div>this is {isMobile ? 'Mobile' : 'Desktop'}</div>;
}

export default ComponentA;
