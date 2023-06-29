import axios from "axios"

// export const BASE_URL = 'http://localhost:3003/'
export const BASE_URL = 'https://michellelang-labenu-labeddit-backend.onrender.com/'


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
        })
    console.log("Get all posts data:", data)
    return data
}

export const PostWithComments = async (id) => {
    const { data } = await axios.get(`${BASE_URL}posts/${id}`,{
        headers: {
            Authorization: localStorage.getItem("labeddit.token")
        }
    })
    console.log("Get all posts data:", data)
    return data
}


export const CreateNewComment = async (id, body) => {
    const token = localStorage.getItem("labeddit.token")
    console.log('CreateNewComment token ', token)

    console.log('CreateNewComment id ', id)

    console.log('CreateNewComment body ', id)

    const response = await axios.post(
        `${BASE_URL}posts/${id}/comment`,
        body,
        {
            headers: {
                Authorization: token
            }
        })
    
    return response
}