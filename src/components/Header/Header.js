import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { goToLoginPage, goToPostsPage } from '../../routes/coordinator'
import { HeaderStyle, HeaderIcon } from './HeaderStyled'
import { Button } from '@chakra-ui/react'
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
                <HeaderIcon>
                    <img src={logoIcon} alt='logo do Labeddit' />
                </HeaderIcon>
                <div>
                    {location.pathname === "/signup" ? (
                        <Button variant='ghost' onClick={() => goToLoginPage(navigate)}>Entrar</Button>
                    ) : (<Button variant='ghost' onClick={buttonLogout}>Logout</Button>)}
                </div>
            </HeaderStyle>
        </>
    )
}
