import React, { useState, useEffect } from "react";
import { SinglePost } from ".";
import { Link } from "react-router-dom";
import { getActivities } from "../api";

const Activities = () => {
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    getActivities()
      .then((x) => {
        setActivities(x);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="posts-main-container">
      <h1>Activities</h1>
      {activities.map((x) => {
        return (
          <div key={x.id}>
            <h2>{x.name}</h2>
            <p>{x.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Activities;
