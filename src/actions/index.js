import axios from "axios";

const ROOT_URL = "https://reduxblog.herokuapp.com/api";
const API_KEY = "?key=arash";

export const CREATE_POST = "create_post";

export function createPost(values) {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values);
  return {
    type: CREATE_POST,
    payload: request
  };
}
