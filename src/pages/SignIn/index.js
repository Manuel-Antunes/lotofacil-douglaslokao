import React from 'react';


import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../assets/logo2.png'
import loto from '../../assets/lotofacil.fw.png'
import logo from '../../assets/logotrevo.fw.png'
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInRequest } from '../../store/models/auth/actions';

function Signin() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);


    const schema = Yup.object().shape({
        email: Yup.string().required('O e-mail é obrigatório'),
        password: Yup.string().required('A senha é obrigatória')
    })
    function handleSubmit({ login, password }) {
        console.log("HAI");
        dispatch(signInRequest(login, password));
    }
    return (
        <Container>
            <div id="logos">
                <img src={logo} alt="Logo" id="logo" />
                <img src={loto} alt="loto" id="loto" />
            </div>
            <div id="form">

                <img src={profile} id="profile" />
                <h2>
                    <b>
                        Acessar o Sistema
                </b>
                </h2>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor={"login"}>Usuário</label>
                    <Input placeholder="Insira aqui seu email" type="text" name="login" id="login" />
                    <label htmlFor={"passoword"}>Senha</label>
                    <Input placeholder="Insira aqui sua senha" type="password" name="password" id="password" />
                    <a>Esqueci minha senha</a>
                    <button type="submit">{loading ? "carregando..." : "Login"}</button>
                </Form>
            </div>
        </Container>
    );
}

export default Signin;