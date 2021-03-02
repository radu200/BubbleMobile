import axios from 'axios';
import env from "./Enviroment";
const AUTH_TOKEN =
  "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjVmNDRkM2ZmMzM2ZjE4MDc2NGYxMjY1ZiIsInR5cGUiOiJtb2JpbGUiLCJpYXQiOjE1OTk2NDg4ODksImV4cCI6MTY0Mzg4NTY4OX0.W4P1OsLIrqzA8-XILGBBrRl1iQYLy3NZSZBZus_zfbQ";


export const INSTANCE_API = axios.create({
  baseURL: env?.ROOT_URL,
  headers: {
    Authorization: AUTH_TOKEN,
  },
});
