import React from 'react';

const BlogPost = ({ title, excerpt, image, link, publishDate, views }) => {
  const truncateExcerpt = (excerpt, wordCount) => {
    const words = excerpt.split(' ');
    if (words.length <= wordCount) {
      return excerpt;
    } else {
      return words.slice(0, wordCount).join(' ') + '...';
    }
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-4 mb-4">
      <div className="card blog-card h-100 shadow-lg rounded-lg overflow-hidden">
        <div className="card-header bg-primary text-white text-center">
          <h5 className="card-title">{title}</h5>
        </div>
        <img src={image} className="card-img-top" alt={title} />
        <div className="card-body p-4">
          <p className="card-text text-muted">{truncateExcerpt(excerpt, 20)}</p>
          <p className="publish-date-time text-info">Published on: {publishDate}</p>
          <p className="view-count text-success">Views: {views}</p>
          <a href={link} className="btn btn-gradient w-100" target="_blank" rel="noopener noreferrer">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
