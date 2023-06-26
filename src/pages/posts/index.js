import { Header } from "../../components/Header/Header"
import { ContainerPostsPage, CardPost} from "./styled"
import { useEffect, useState } from "react"
import { PostsFeed } from "../../constants"
import { goToPostWithCommentsPage } from "../../routes/coordinator"
import { useNavigate } from "react-router-dom"

export const PostsPage = () => {
    const navigate = useNavigate()
    const [posts, setPosts] = useState([])

    useEffect(() => {
        PostsFeed()
        .then(data => {
            setPosts(data)
            console.log(data)
        })
        .catch((error)=> {
            console.log(error)
        })
    }, [])

    const onClickCard = (id) => {
        goToPostWithCommentsPage(navigate, id)
    }

    return (
        <>
            <Header/>
            <di>
                <textarea
                    placeholder="Escreva seu post"
                />
                <div>
                    <button>Postar</button>
                </div>
                
            </di>
            <ContainerPostsPage>
                    {posts.map((post, index) => (
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