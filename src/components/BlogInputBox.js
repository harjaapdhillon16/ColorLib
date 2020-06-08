import React from 'react';

const BlogInputBox = () => {
  return (
    <div className="field">
      <p className="control  has-icons-right">
        <input className="input is-medium" placeholder="Search" />
        <span className="icon is-small is-right">
          <i className="fas fa-search" />
        </span>
      </p>
    </div>
  );
};
export default BlogInputBox;
