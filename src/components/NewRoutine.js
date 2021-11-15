import React, { useState } from "react";
import { createRoutines } from "../api";
import { getToken, getUser } from "../auth";

const NewRoutine = ({ setAllPosts, allPosts }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  return (
    <div className="ui container">
      <form
        className="ui form"
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await createRoutines(title, description, price);
            // setAllPosts([data.post, ...allPosts]);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <h2>Create Workout</h2>
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
          <label htmlFor="goal">Goal:</label>
          <input
            id="goal"
            type="text"
            placeholder="Enter goal"
            value={description}
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          ></input>
        </fieldset>
        <fieldset className="auth-component-input">
          <label htmlFor="title">Public?:</label>
          <input
            id="isPublic"
            type="text"
            placeholder="Enter true or false"
            value={price}
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          ></input>
        </fieldset>
        <button className="ui button" typeof="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewRoutine;
