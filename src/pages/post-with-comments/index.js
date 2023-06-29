import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { CreateNewComment, PostWithComments } from "../../constants"
import { useForm } from '../../hooks/useForm'
import { Header } from "../../components/Header/Header"
import { ContainerPostsCommentsPage, CardComments } from "./styled"
import { Button, Divider, Textarea } from "@chakra-ui/react"

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
                <ContainerPostsCommentsPage>
                    <CardComments>
                        <p>{postAndComments.postWithComments.post.creatorName}</p>
                        <h1>{postAndComments.postWithComments.post.content}</h1>
                        {/* <p>{postAndComments.postWithComments.post.likes}</p>
                        <p>{postAndComments.postWithComments.post.dislikes}</p> */}
                    </CardComments>

                    <form onSubmit={onSubmitNewComment} >
                        <Textarea marginBottom={5}
                            name="content"
                            value={form.content}
                            onChange={onChangeInputs}
                            placeholder="Escreva seu comentário..."
                        />
                        <div>
                            <Button variant="form" type="submit" marginBottom={5}>Responder</Button>
                        </div>
                    </form>

                    <Divider marginBottom={5}></Divider>

                    {postAndComments.postWithComments.comments
                        .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                        .map((comment, index) => (
                            <CardComments key={index}>
                                <p>{comment.creatorName}</p>
                                <p>{comment.content}</p>
                                <p>{comment.likes}</p>
                            </CardComments>
                        ))} 
                </ContainerPostsCommentsPage>
            </>
        )
    )
}