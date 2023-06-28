import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostsPage } from '../../routes/coordinator'
import { HeaderStyle, IconLogo, ButtonHeader } from './HeaderStyled'
import { Button, Icon } from '@chakra-ui/react'
import logoIcon from '../../assets/headerIcon.png'

export const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()


    const buttonLogout = () => {
        localStorage.removeItem("labeddit.token")
        goToLoginPage(navigate)
    }
    return (
        <>
            <HeaderStyle>
                <IconLogo>
                    <img src={logoIcon} alt='logo do Labeddit' />
                </IconLogo>
                <ButtonHeader>
                    {location.pathname === "/signup" ? (
                        <Button variant='ghost' onClick={() => goToLoginPage(navigate)}>Entrar</Button>
                    ) : (<Button variant='ghost' onClick={buttonLogout}>Logout</Button>)}
                </ButtonHeader>
            </HeaderStyle>
        </>
    )
}
