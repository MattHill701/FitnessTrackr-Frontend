import React, { useState, useEffect } from "react";
import { getAllRoutines } from "../api";
import { getUser } from "../auth";
import { MyRoutines } from ".";

const UserPage = () => {
  const [routines, setRoutines] = useState([]);
  useEffect(() => {
    getAllRoutines()
      .then((x) => {
        setRoutines(x);
      })
      .catch(console.error);
  }, []);
  let user = getUser();
  return (
    <div className="posts-main-container">
      <h1>Username: {user}</h1>
      <h1>Workouts Created:</h1>
      {routines.map((x) => {
        if (x.creatorName === user) {
          return (
            <div key={x.id}>
              <h2>{x.name}</h2>
              <h3>Goal: {x.goal}</h3>
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
        }
      })}
    </div>
  );
};
export default UserPage;
