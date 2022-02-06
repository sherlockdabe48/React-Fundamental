import React from 'react';
import useNumber from '../hooks/useNumber';

function ComponentB() {
  const number = useNumber()

  return <div>from Component B {number}</div>;
}

export default ComponentB;
