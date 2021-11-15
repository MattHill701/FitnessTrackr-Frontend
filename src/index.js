import axios from "axios";
import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { getToken } from "./auth";

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";

import {
  Header,
  Posts,
  NavBar,
  Register,
  Login,
  NewPostForm,
  SinglePostPage,
  SearchBar,
  UserPage,
  Activities,
  NewRoutine
} from "./components";

const App = () => {
  const [allPosts, setAllPosts] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPosts, setFilteredPosts] = useState([]);

  return (
    <div id="App">
      <Header />
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <Switch>
        <Route path="/register">
          <Register setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/login">
          <Login setIsLoggedIn={setIsLoggedIn} setIsLoading={setIsLoading} />
        </Route>
        <Route path="/posts/:postsId">
          <SinglePostPage allPosts={allPosts} />
        </Route>
        <Route path="/posts">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <Posts allPosts={allPosts} filteredPosts={filteredPosts} />
          <NewRoutine setAllPosts={setAllPosts} allPosts={allPosts} />
        </Route>
        <Route path="/activities">
          <Activities />
          <NewPostForm setAllPosts={setAllPosts} allPosts={allPosts} />
        </Route>
        <Route path="/userpage">
          <UserPage />
        </Route>
      </Switch>
    </div>
  );
};

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
