import React, { useState, useEffect } from "react";
import { attachActivities } from "../api";
import { getUser } from "../auth";

const attachActivity = (param) => {
  let user = getUser();
  if (user === param.creatorName) {
    return (
      <form
        id="newPostSubmit"
        onSubmit={async (event) => {
          event.preventDefault();
          try {
            const data = await attachActivities(param.id);
            console.log(data, "!!!!!!!!");
          } catch (error) {
            console.log(error);
          }
        }}
      >
        <button type="submit">Add Activity</button>
      </form>
    );
  }
};

export default attachActivity;
