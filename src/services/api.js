import axios from "axios";

const api = axios.create({
  // baseURL: `http://localhost:3003/`,
  baseURL: `https://seminario-distribuida-backend.herokuapp.com/`,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Acces-Control-Allow-Origin": "*",
  },
});

export async function getGithubInfo(user) {
  console.log(user)
  return await api.get("/github-info", {
    params: {
      user
    }
  });
}

export async function addLugar(userName, place) {
  return await api.post("/places", {
      "userName": userName,
      "place": place
  });
}


export async function getLugares(userName) {
  return await api.get("/places", {
    params: {
      userName
    }
  });
}