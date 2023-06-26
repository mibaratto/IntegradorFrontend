import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import  { useForm } from '../../hooks/useForm'
import {
    ContainerForm,
    ContainerLoginPage,
} from './styled'
import { goToSignupPage, goToPostsPage } from '../../routes/coordinator';
import {
    FormControl,
    FormLabel,
    Button,
    Input
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
        <div>
                <img src={logo} alt='logo do Labeddit' />
                <form onSubmit={onSubmitForm}>
                        <input
                            id='email'
                            name={'email'}
                            type='email'
                            placeholder='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            required
                        />
                        <input
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
                        <div>
                        {/* <Button variant="form" type="submit" onClick={() => goToPostsPage(navigate)}>Continuar</Button> */}
                        <Button type="submit" variant="form">Continuar</Button>
                        <Button variant="form" onClick={() => goToSignupPage(navigate)}>Crie uma conta!</Button>
                        </div>
                    
                </form>
        </div>
    )
    
}
