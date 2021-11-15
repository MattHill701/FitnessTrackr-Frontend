import React, { useState, useEffect } from "react";
import { MyRoutines } from ".";
import { Link } from "react-router-dom";
import { getAllRoutines } from "../api";

const Posts = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    getAllRoutines()
      .then((x) => {
        setRoutines(x);
      })
      .catch(console.error);
  }, []);
  return (
    <div className="posts-main-container">
      <h1>Workouts</h1>
      {routines.map((x) => {
        return (
          <div key={x.id}>
            <h2>{x.name}</h2>
            <h3>Goal: {x.goal}</h3>
            <h3>Created By: {x.creatorName}</h3>
            {MyRoutines(x)}
            <div>
              {x.activities.map((y) => {
                return (
                  <div key={y.routineActivityId}>
                    <h4>{y.name}</h4>
                    <p>Description: {y.description}</p>
                    <p>Duration: {y.duration}</p>
                    <p>Count: {y.count}</p>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
