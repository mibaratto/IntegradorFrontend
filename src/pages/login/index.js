import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {
    ContainerForm,
    ContainerLoginPage,
} from './styled'
import { goToSignupPage, goToPostsPage } from '../../routes/coordinator';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input
} from '@chakra-ui/react'
import logo from '../../assets/logoLabeddit.png'

export const LoginPage = () => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <ContainerLoginPage>
            <ContainerForm>
                <form onSubmit={onSubmit}>
                    <img src={logo} alt='logo do Labeddit' />
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            required
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Senha</FormLabel>
                        <Input
                            id='senha'
                            minLength={8}
                            name="password"
                            value={form.password}
                            onChange={onChangeInputs}
                            pr='4.5rem'
                            type='password'
                            placeholder='Senha'
                            required
                        />
                    </FormControl>
                    <Button type="submit" variant="form">Continuar</Button>
                    <Button type="submit" variant="form" onClick={() => goToSignupPage(navigate)}>Crie uma conta!</Button>
                </form>
            </ContainerForm>
        </ContainerLoginPage>
    )
    
}
