import React, { useState } from "react";
import { useParams } from "react-router";
import { createMessages } from "../api";
import { SinglePost } from ".";

const SinglePostPage = ({ allPosts }) => {
  const { postsId } = useParams();
  const [message, setMessage] = useState("");
  const myPost = allPosts.find((posts) => {
    if (posts._id === postsId) {
      return true;
    } else {
      return false;
    }
  });

  if (!myPost) {
    return (
      <div className="post-card">
        <h1>Post ID {postsId} not found</h1>
      </div>
    );
  }

  return (
    <div className="post-main-container">
      <h1>Single Post Page</h1>
      <SinglePost posts={myPost} />
      <form
        id="newMessageSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { data } = await createMessages(postsId, message);
            alert("Your message has been sent!");
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <fieldset className="message-input">
          <input
            id="message"
            type="text"
            placeholder="Enter Message"
            value={message}
            onChange={(event) => {
              setMessage(event.target.value);
            }}
          ></input>
        </fieldset>
        <button typeof="submit">Submit</button>
      </form>
    </div>
  );
};
export default SinglePostPage;
