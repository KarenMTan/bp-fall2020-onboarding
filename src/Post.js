import React from 'react';
import PropTypes from 'prop-types';

export default function Post({
  title, body, author, date,
}) {
  console.log(date);
  return (
    <>
      <div>
        {author}
      </div>
      <div>
        {date}
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
  date: PropTypes.shape({ seconds: PropTypes.number, nanoseconds: PropTypes.number }),
};

Post.defaultProps = {
  date: { seconds: 0, nanoseconds: 0 },
};
