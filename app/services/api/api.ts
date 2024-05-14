import axios from "axios";
export default function api(isAuth = false): any {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  if (isAuth) {
    try {
      const tokens: any = localStorage.getItem("token");
      headers.Authorization = `Bearer ${JSON.parse(tokens)}`;
    } catch (error) {
      console.log(error);
    }
  }
  const client = axios.create({
    baseURL: "http://localhost:8080",
    timeout: 35000,
    headers,
  });

  return client;
}
