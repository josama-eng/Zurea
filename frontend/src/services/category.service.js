import axios from "axios";

export const RandomCategory = () => axios.get("/category/rand");
