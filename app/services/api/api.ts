import axios from "axios";
export default function api(isAuth = false): any {
  const headers: any = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
  };
  if (isAuth) {
    try {
      axios.interceptors.request.use((config) => {
        const tokens: any = localStorage.getItem("token");
        if (tokens) {
          config.headers.Authorization = `Bearer ${JSON.parse(tokens)}`;
        }
        return config;
      });
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
