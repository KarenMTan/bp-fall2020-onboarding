import React, { useState, useEffect } from 'react';

export default function Post() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    document.title = `The current counter is ${counter}`;
  }, [counter]);

  return (
    <>
      <div>
        {counter}
      </div>
      <button
        type="button"
        onClick={() => { setCounter(counter + 1); }}
      >
        Click me!
      </button>
    </>
  );
}
