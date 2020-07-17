import Axios from "./axios";

export const login = (payload) =>
  Axios.post("/sessions", {
    user: payload,
  });

export const logout = () => Axios.delete("/logout");
