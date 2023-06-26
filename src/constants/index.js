import axios from "axios"


export const BASE_URL = 'http://localhost:3003/'

export const Login = async (body) => {
    console.log("Login body:", body)
    const { data } =  await axios.post(`${BASE_URL}users/login`, body)
    console.log("Login data:", data)
    return data
}

export const Signup = async (body) => {
    console.log("Signup body:", body)
    const { data } = await axios.post(`${BASE_URL}/users/signup`, body)
    console.log("Signup data:", data)
    return data
}