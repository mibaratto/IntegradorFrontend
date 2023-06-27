import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { PostWithComments } from "../../constants"

export const PostWithCommentsPage = () => {
    const {id} = useParams()
    const [postAndComments, setPostAndComments] = useState()

    useEffect(() => {
        PostWithComments(id)
        .then(data => {
            setPostAndComments(data)
        })
        .catch(error => alert(error.response.data.message))
    },[])

    let onlyPost = JSON.stringify(postAndComments.postWithComments.post.content)
    let onlyComments = JSON.stringify(postAndComments.postWithComments.comments
        .map(comment => comment.content))
    return (
        <>
            <h1>{onlyPost}</h1>
            <br></br>
            <p>{JSON.stringify(postAndComments.postWithComments.post.content)}</p>
            <br></br>
            <p>{onlyComments}</p>
            <br></br>
            {JSON.stringify(postAndComments.postWithComments.comments
                .map(comment => comment.content + comment.id))}
        </>
    )
}