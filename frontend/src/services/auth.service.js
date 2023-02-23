import axios from "axios";

export const loginUser = (data) => axios.post('/auth/login', data)

export const setUserToLocalStorage = (userObj) => localStorage.setItem('zu_user', JSON.stringify(userObj))
export const removeUserFromLocalStorage = () => localStorage.removeItem('zu_user')