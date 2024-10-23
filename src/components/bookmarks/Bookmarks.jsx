import PropTypes from "prop-types";
import Bookmark from "../bookmark/bookmark";

const Bookmarks = ({ bookmarks, readtime }) => {
  return (
    <div className="md:w-1/2  bg-gray-100 ml-3 mt-3 p-3 rounded-lg ">
      <div className="p-3 border-2 border-gray-300 rounded-lg mb-3">
        <h2 className="text-2xl font-bold mb-3">Reading Time:{readtime}</h2>
      </div>
      <h2>Booksmarks Blogs:{bookmarks.length}</h2>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readtime: PropTypes.number.isRequired,
};
export default Bookmarks;
