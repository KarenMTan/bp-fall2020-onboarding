import React from 'react';
import PropTypes from 'prop-types';

export default function Post({
  title, body, author,
}) {
  return (
    <>
      <div>
        {author}
      </div>
      <div>
        {title}
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
