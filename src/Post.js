import React, { useState } from 'react';

export default function Post() {
  const [text, setText] = useState('');
  const [hiddenText, setHiddenText] = useState('');
  return (
    <>
      <div>
        {text}
      </div>
      <input onChange={(e) => { setHiddenText(e.target.value); }} />
      <button
        type="button"
        onClick={() => { setText(hiddenText); }}
      >
        Submit
      </button>
    </>
  );
}
