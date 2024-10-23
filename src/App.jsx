import { useState } from "react";
import "./App.css";
import Blogs from "./components/blogs/Blogs";
import Bookmarks from "./components/bookmarks/Bookmarks";
import Header from "./components/header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readtime, setReadtime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadtime = (time) => {
    setReadtime(readtime + time);
    console.log(readtime);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex md:w-11/12 md:mx-auto">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadtime={handleReadtime}
        ></Blogs>
        <Bookmarks bookmarks={bookmarks} readtime={readtime}></Bookmarks>
      </div>
    </>
  );
}

export default App;
