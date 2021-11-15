import React, { useState } from "react";

const SinglePost = ({ activities }) => {
  //const [isAuthor, setIsAuthor] = useState(false);
  console.log(activities);
  return (
    <div className="post-card">
      {activities.map((y) => {
        return (
          <div classname="activity" key={y.routineActivityId}>
            <p>{y.name}</p>
            <p>{y.description}</p>
          </div>
        );
      })}
    </div>
  );
};
export default SinglePost;
