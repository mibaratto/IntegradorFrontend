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
    const { data } = await axios.post(`${BASE_URL}users/signup`, body)
    console.log("Signup data:", data)
    return data
}


export const PostsFeed = async () => {
    const { data } = await axios.get(`${BASE_URL}posts/`,{
        headers: {
            Authorization: localStorage.getItem("labeddit.token")
        }
    }
    )
    console.log("Get all posts data:", data)
    return data
}

export const CreateNewPost = async (body) => {
    const token = localStorage.getItem("labeddit.token")
    console.log('CreateNewPost token ', token)

    const { data } = await axios.post(
        `${BASE_URL}posts/`,
        body,
        {
            headers: {
                Authorization: token
            }
        }
    )
    console.log("Get all posts data:", data)
    return data
}