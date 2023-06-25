
export const goToLoginPage = (navigate) =>{
    navigate('/')
}

export const goToSignupPage = (navigate) =>{
    navigate('/signup')
}

export const goToPostsPage = (navigate) =>{
    navigate('/posts')
}

export const goToPostWithCommentsPage = (navigate, id) =>{
    navigate(`/post/${id}`)
}