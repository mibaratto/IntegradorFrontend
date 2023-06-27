import { Header } from "../../components/Header/Header"
import { ContainerPostsPage, CardPost } from "./styled"
import { useEffect, useState } from "react"
import { CreateNewPost, PostsFeed } from "../../constants"
import { goToPostWithCommentsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"
import { useForm } from '../../hooks/useForm'

export const PostsPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        readPosts()
    }, [])

    const onClickCard = (id) => {
        goToPostWithCommentsPage(navigate, id)
    }

// -----------------------------


    const { form, onChangeInputs, clearInputs } = useForm({
        content:""
    })

    const onSubmitNewPost = async (event) => {
        event.preventDefault()
        try {
            await CreateNewPost({
                content: form.content
            });
            readPosts()
        } catch (error) {
            alert(error.response.data)
            console.log(error)
        }
    }

    const readPosts = () => PostsFeed()
    .then(data => {
        setPosts(data)
        console.log(data)
    })
    .catch((error) => {
        console.log(error)
    })

    return (
        <>
            <Header />
                <form onSubmit={onSubmitNewPost}>
                    <textarea
                        name="content"
                        value={form.content}
                        onChange={onChangeInputs}
                        placeholder="Escreva seu post"
                    />
                    <div>
                        <button type="submit">Postar</button>
                    </div>
                </form>
{/* //------------------------- */}
            <ContainerPostsPage>
                {posts
                .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                .map((post, index) => (
                    <CardPost key={index} onClick={() => onClickCard(post.id)}>
                        <h3>{post.content}</h3>
                        <h3>{post.id}</h3>
                        <h3>{post.creator.name}</h3>
                    </CardPost>
                ))}
            </ContainerPostsPage>
        </>
    )
}