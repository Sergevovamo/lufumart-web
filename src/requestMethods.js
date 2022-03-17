import axios from "axios";

const BASE_URL = " https://api-v1.lufumart.com";
// const TOKEN =
//   JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user).currentUser
//     .accessToken || "";

// const user = JSON.parse(localStorage.getItem("persist:root"))?.user;
// const currentUser = user && JSON.parse(user).currentUser;
// const TOKEN = currentUser?.accessToken;
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3RAZ21haWwuY29tIiwiaWQiOiI2MjE4M2I5NDI4OTA0ZjdhYTBjMWNhOTciLCJpYXQiOjE2NDc0OTE4NTcsImV4cCI6MTY0OTkxMTA1N30.PyhFQ2dqqjqrGMtXYwxCni250GSTi6J1ycULSVuZ3nE";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});