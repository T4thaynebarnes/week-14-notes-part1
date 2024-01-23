import "./App.css";
import NewsFeed from "./components/news-feed";
import Notes from "./components/notes";
// import ReplyButton from "./components/reply-button";
// import LikeButton from "./components/like-button";
// import Comment from "./components/comment";
import Post from "./components/post";

function App() {
  return (
    <div className="App">
      <Notes />
      <NewsFeed />
    </div>
  );
}

export default App;
