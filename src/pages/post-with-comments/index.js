import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CreateNewComment, PostWithComments } from "../../constants"
import { useForm } from '../../hooks/useForm'
import { Header } from "../../components/Header/Header"


export const PostWithCommentsPage = () => {
    const { id } = useParams()
    const [postAndComments, setPostAndComments] = useState()

    useEffect(() => {
        PostWithComments(id)
            .then(data => {
                setPostAndComments(data)
            })
            .catch(error => alert(error.response.data.message))
    }, [])

    // let onlyPost = JSON.stringify(postAndComments.postWithComments.post.content)
    // let onlyComments = JSON.stringify(postAndComments.postWithComments.comments
    //     .map(comment => comment.content))

    // --------------------------

    const { form, onChangeInputs, clearInputs } = useForm({
        content: ""
    })

    const onSubmitNewComment = async (event) => {
        event.preventDefault()

        try {
            await CreateNewComment( 
                id,               
                {
                    "content": form.content
                }
            );
            
            PostWithComments(id)
            .then(data => {
                setPostAndComments(data)
            })
            .catch(error => alert(error.response.data.message))

        } catch (error) {
            alert(error.response.data)
            console.log(error)
        }
    }



    return (
        <>
            <Header />
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
            {/* <h1>{onlyPost}</h1> */}
            <br></br>
            {/* <p>{JSON.stringify(postAndComments.postWithComments.post.content)}</p> */}
            <p>{JSON.stringify(postAndComments)}</p>
            {/* <br></br>
            <p>{onlyComments}</p>
            <br></br>
            {JSON.stringify(postAndComments.postWithComments.comments
                .map(comment => comment.content + comment.id))} */}
        </>
    )
}