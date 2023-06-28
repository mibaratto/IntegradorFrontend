import { Header } from "../../components/Header/Header"
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { Container, ContainerSignupPage, TextGreeting, ContainerBotton } from './styled'
import { goToPostsPage } from '../../routes/coordinator';
import { Button, Input, Checkbox } from '@chakra-ui/react'
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
    const textGreenting = "Olá, boas vindas ao LabEddit ;)"
    const textPrivace = "Ao continuar, você concorda com o nosso Contrato de usuário e nossa Política de Privacidade"
    const textCheckBox = "Eu concordo em receber emails sobre coisas legais no Labeddit"
    return (
        <div>
            <Header />
            <form onSubmit={onSubmitForm}>
            <ContainerSignupPage>
                    <TextGreeting>{textGreenting}</TextGreeting>
                    <Container>
                        <Input
                            id='name'
                            name='name'
                            placeholder='Apelido'
                            value={form.name}
                            onChange={onChangeInputs}
                            required
                        />
                        <Input
                            id='email'
                            name='email'
                            type='email'
                            placeholder='email'
                            value={form.email}
                            onChange={onChangeInputs}
                            required
                        />
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
                    </Container>
                    <ContainerBotton>
                        {/* <h1>Oi</h1> */}
                        <div>{textPrivace}</div>
                        <Checkbox>{textCheckBox}</Checkbox>
                        <Button type="submit" variant="form">Cadastrar</Button>
                    </ContainerBotton>
                
            </ContainerSignupPage>
            </form>
        </div>
    )
}
