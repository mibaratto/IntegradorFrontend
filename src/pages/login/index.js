import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {
    Container,
    ContainerLoginPage,
} from './styled'
import { goToSignupPage, goToPostsPage } from '../../routes/coordinator';
import {
    FormControl,
    FormLabel,
    Button,
    Input,
    Divider
} from '@chakra-ui/react'
import logo from '../../assets/logoLabeddit.png'
import { Login } from '../../constants';



export const LoginPage = () => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        email: "",
        password: ""
    })

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const { token } = await Login({
                email: form.email,
                password: form.password
            });
            localStorage.setItem("labeddit.token", token)
            goToPostsPage(navigate)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <form onSubmit={onSubmitForm}>
        <ContainerLoginPage>
            <img src={logo} alt='logo do Labeddit' />
            
                <Container>
                    <Input
                        id='email'
                        name={'email'}
                        type='email'
                        placeholder='email'
                        value={form.email}
                        onChange={onChangeInputs}
                        required
                    />
                    <Input
                        id='senha'
                        minLength={8}
                        name={"password"}
                        value={form.password}
                        onChange={onChangeInputs}
                        pr='4.5rem'
                        type='password'
                        placeholder='Senha'
                        required
                    />
                        {/* <Button variant="form" type="submit" onClick={() => goToPostsPage(navigate)}>Continuar</Button> */}
                        <Button type="submit" variant="form">Continuar</Button>
                        <Divider />
                        <Button variant="form" onClick={() => goToSignupPage(navigate)}>Crie uma conta!</Button>
                </Container>
                </ContainerLoginPage>
            </form>
       
    )

}
