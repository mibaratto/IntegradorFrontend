import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CreateNewComment, PostWithComments } from "../../constants"
import { useForm } from '../../hooks/useForm'
import { Header } from "../../components/Header/Header"


export const PostWithCommentsPage = () => {
    const { id } = useParams()
    const [postAndComments, setPostAndComments] = useState()

    const { form, onChangeInputs, clearInputs } = useForm({
        content: ""
    })

    useEffect(() => {
        readPostWithComments()
    }, [])


    // --------------------------

    const readPostWithComments = () => PostWithComments(id)
            .then(data => {
                setPostAndComments(data)
            })
            .catch(error => alert(error.response.data.message))

    


    const onSubmitNewComment = async (event) => {
        event.preventDefault()

        try {
            await CreateNewComment( 
                id,               
                {
                    "content": form.content
                }
            );
            readPostWithComments()

        } catch (error) {
            alert(error.response.data)
            console.log(error)
        }
    }



    return (
        postAndComments && (
        <>
            <Header />
            <p>{postAndComments.postWithComments.post.id}</p>
            <p>{postAndComments.postWithComments.post.content}</p>
            <p>{postAndComments.postWithComments.post.likes}</p>
            <p>{postAndComments.postWithComments.post.dislikes}</p>
            

            <form onSubmit={onSubmitNewComment}>
                <textarea
                    name="content"
                    value={form.content}
                    onChange={onChangeInputs}
                    placeholder="Escreva seu comentário"
                />
                <div>
                    <button type="submit">Postar</button>
                </div>
            </form>

            {/* ---------------------------- */}
            <br></br>
            <p>{postAndComments.postWithComments.comments
                .map(comment => comment.content + comment.id)}
            </p>
            
        </>
        )
    )
}