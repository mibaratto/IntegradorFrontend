import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostsPage } from '../../routes/coordinator'
import { HeaderStyle, Title } from './HeaderStyled'
import { Button } from '@chakra-ui/react'

export const Header = () => {
    const navigate = useNavigate()
    const changePage = () =>{
        if(localStorage.getItem('token')){
            goToPostsPage(navigate)
        } else {
            goToLoginPage(navigate)
        }
    }
    return (
        <HeaderStyle>
            <Title onClick={() => changePage(navigate)}>Labeddit</Title>
            <Button  variant='ghost' onClick={() => goToLoginPage(navigate)}>Login</Button>
        </HeaderStyle>
    )

}