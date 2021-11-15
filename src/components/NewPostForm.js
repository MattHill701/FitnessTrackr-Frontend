import React, { useState } from "react";
import { createActivity } from "../api";

const NewPostForm = ({ setAllPosts, allPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="new-post-component-main-container">
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const { data } = await createActivity(title, description);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h2>Create Activity</h2>
        <fieldset className="auth-component-input">
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter name"
            value={title}
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="description">Description:</label>
          <input
            id="description"
            type="text"
            placeholder="Enter description"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <button typeof="submit">Submit</button>
      </form>
    </div>
  );
};

export default NewPostForm;
