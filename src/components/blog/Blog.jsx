import PropTypes from "prop-types";
import { FaRegBookmark } from "react-icons/fa";
const Blog = ({ blog, handleBookmarks, handleReadtime }) => {
  // code for rendering the blog
  const {
    title,
    coverimg,
    author_img,
    author,
    post_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="space-y-4">
      <img
        className="w-full h-96 object-cover rounded-md"
        src={coverimg}
        alt={`${title} cover image`}
      />

      <div className="flex justify-between items-center my-4 ">
        <div className="flex items-center gap-2">
          <img className="w-10 h-10 rounded-full" src={author_img} alt="" />
          <div className="">
            <h3 className="text-lg font-bold">{author}</h3>
            <p className="text-sm text-gray-500 ">{post_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <p className="text-sm text-gray-500 ">{reading_time} minutes read</p>
          <button onClick={() => handleBookmarks(blog)}>
            <FaRegBookmark />
          </button>
        </div>
      </div>
      <h2 className="text-3xl font-bold ">{title}</h2>
      <p>
        {hashtags.map((hashtag, index) => (
          <span className="font-bold text-sm text-gray-500 mr-2" key={index}>
            <a href="">#{hashtag}</a>
          </span>
        ))}
      </p>
      <button
        onClick={() => handleReadtime(reading_time)}
        className="my-6 underline-offset-1 underline text-blue-500"
      >
        Mark as read
      </button>
    </div>
  );
};
Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadtime: PropTypes.func.isRequired,
};
export default Blog;
