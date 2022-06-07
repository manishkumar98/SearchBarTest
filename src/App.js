import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Search from "./search";

const posts = [
  { id: "1", name: "The month is January" },
  { id: "2", name: "The month is February" },
  { id: "3", name: "The month is March" },
  { id: "4", name: "The month is April" }
];

const filterPosts = (posts, query) => {
  if (!query) {
    return posts;
  }

  return posts.filter((post) => {
    const postName = post.name.toLowerCase();
    return postName.includes(query);
  });
};

const App = () => {
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredPosts = filterPosts(posts, searchQuery);

  return (
    <Router>
      <div className="App">
        <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ul>
          {filteredPosts.map((post) => (
            <li key={post.id}>{post.name}</li>
          ))}
        </ul>
      </div>
    </Router>
  );
};

export default App;
