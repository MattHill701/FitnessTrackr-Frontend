import axios from "axios";
import { getToken, storeToken, storeUser } from "../auth";
const BASE = "https://fitnesstrac-kr.herokuapp.com/api";

// this is an example for an api call with axios
export async function getUsers() {
  try {
    const { data } = await axios.get(`${BASE}/users`);
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function registerUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/register`, {
      username: username,
      password: password
    });
    storeToken(data.token);
    storeUser(data.user.username);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function loginUser(username, password) {
  try {
    const { data } = await axios.post(`${BASE}/users/login`, {
      username: username,
      password: password
    });
    storeToken(data.token);
    storeUser(data.user.username);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getMe() {
  const myToken = getToken();
  try {
    const { data } = await axios.get(`${BASE}/users/me`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${myToken}`
      }
    });
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getAllRoutines() {
  try {
    const { data } = await axios.get(`${BASE}/routines`);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function createRoutines(name, goal, isPublic) {
  const myToken = getToken();
  try {
    const { data } = await axios.post(
      `${BASE}/routines`,
      {
        name: name,
        goal: goal,
        isPublic: true
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function getActivities() {
  try {
    const { data } = await axios.get(`${BASE}/activities`, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
export async function createActivity(name, description) {
  const myToken = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/activities`,
      {
        name: name,
        description: description
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteRoutine(id) {
  const myToken = getToken();

  try {
    const { data } = await axios.delete(`${BASE}/routines/${id}`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${myToken}`
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function deleteActivities(id) {
  const myToken = getToken();

  try {
    const { data } = await axios.delete(`${BASE}/routine_activities/${id}`, {
      headers: {
        "Content-Type": "application/JSON",
        Authorization: `Bearer ${myToken}`
      }
    });
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function patchRoutines(id, name, goal, isPublic) {
  const myToken = getToken();

  try {
    const { data } = await axios.patch(
      `${BASE}/routines/${id}`,
      {
        name: name,
        goal: goal,
        isPublic: isPublic
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function patchActivities(id, count, duration) {
  const myToken = getToken();

  try {
    const { data } = await axios.patch(
      `${BASE}/routine_activities/${id}`,
      {
        count: count,
        duration: duration
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}

export async function attachActivities(id, activityId, count, duration) {
  const myToken = getToken();

  try {
    const { data } = await axios.post(
      `${BASE}/routines/${id}/activities`,
      {
        activityId: activityId,
        count: count,
        duration: duration
      },
      {
        headers: {
          "Content-Type": "application/JSON",
          Authorization: `Bearer ${myToken}`
        }
      }
    );
    console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
}
