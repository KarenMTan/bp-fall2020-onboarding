import React from 'react';
import PropTypes from 'prop-types';

export default function Post({ title, body, author }) {
  return (
    <>
      <div>
        {title}
      </div>
      <div>
        {author}
      </div>
      <div>
        {body}
      </div>
    </>
  );
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
};
