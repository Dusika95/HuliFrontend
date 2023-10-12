import { api } from "../adapters/user-api";

const resource = "api/users/admin/all-users";

export const registerUser = (user) => api.post("api/register",user).then((res) => res.json());

export const loginUser = (userInfo) => api.post("api/login", userInfo).then((res) => res.json());

export const allUser = () => api.get(resource).then((res) => res.json());

export const deleteUser = (userId) => api.delete(`${resource}/${userId}`).then((res) => res.json())
