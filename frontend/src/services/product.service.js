import axios from "axios";

export const GetAllProducts = (elPerPage, page) => axios.get(`/product/get-all/${elPerPage}/${page}`)

export const SearchProducts = (searchParam) => axios.post('/product/search', {searchParam: searchParam})