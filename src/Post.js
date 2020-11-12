import React, { useState } from 'react';

export default function Post() {
  const [text, setText] = useState('');
  return (
    <>
      <div>
        {text}
      </div>
      <input onChange={(e) => { setText(e.target.value); }} />
    </>
  );
}
