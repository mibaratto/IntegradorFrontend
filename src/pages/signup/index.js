import { Header } from "../../components/Header/Header"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import {
    ContainerForm,
    ContainerLoginPage,
} from './styled'
import { goToPostsPage } from '../../routes/coordinator';
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
    Button,
    Input
} from '@chakra-ui/react'
import { Signup } from "../../constants"



export const SignupPage = () => {
    const navigate = useNavigate()

    const { form, onChangeInputs, clearInputs } = useForm({
        name: "",
        email: "",
        password: ""
    })

    const onSubmitForm = async (event) => {
        event.preventDefault()
        try {
            const { token } = await Signup({
                name: form.name,
                email: form.email,
                password: form.password
            });
            localStorage.setItem("labeddit.token", token)
            goToPostsPage(navigate)
        } catch (error) {
            alert(error.response.data)
            console.log(error)
        }
    }

    return (
        <div>
            <Header />
            <form onSubmit={onSubmitForm}>
                <input
                    id='name'
                    name='name'
                    placeholder='Apelido'
                    value={form.name}
                    onChange={onChangeInputs}
                    required
                />
                <input
                    id='email'
                    name='email'
                    type='email'
                    placeholder='email'
                    value={form.email}
                    onChange={onChangeInputs}
                    required
                />
                <input
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
                <Button type="submit" variant="form">Cadastrar</Button>
            </form>
        </div>
    )
}
