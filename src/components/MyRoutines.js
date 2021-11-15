import React, { useState, useEffect } from "react";
import { deleteRoutine } from "../api";
import { getUser } from "../auth";

const MyRoutines = (param) => {
  let user = getUser();
  if (user === param.creatorName) {
    return (
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await deleteRoutine(param.id);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <button type="submit">DELETE ME</button>
      </form>
    );
  }
};

export default MyRoutines;
