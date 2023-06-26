import { Header } from "../../components/Header/Header"
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



export const SignupPage = () => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        userName: "",
        email: "",
        password: ""
    })

    const onSubmit = (event) => {
        event.preventDefault()
    }

    return (
        <ContainerLoginPage>
            <Header/>
            <ContainerForm>
                <form onSubmit={onSubmit}>
                    <FormControl>
                        <FormLabel>Apelido</FormLabel>
                        <Input
                            id='userName'
                            name='userName'                            
                            placeholder='Apelido'
                            value={form.userName}
                            onChange={onChangeInputs}
                            required
                        />
                    </FormControl>
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
                    <Button type="submit" variant="form">Cadastrar</Button>
                </form>
            </ContainerForm>
        </ContainerLoginPage>
    )

}