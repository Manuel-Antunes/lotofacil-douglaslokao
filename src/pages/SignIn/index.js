import React from 'react';


import { Container } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import profile from '../../assets/logo2.png'
import loto from '../../assets/lotofacil.fw.png'
import logo from '../../assets/logotrevo.fw.png'
import { Form, Input } from '@rocketseat/unform';

import { signInRequest } from '../../store/models/auth/actions';

function Signin() {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.auth.loading);

    function handleSubmit({ login, password }) {
        dispatch(signInRequest(login, password));
    }
    return (
        <Container>
            <div id="logos">
                <img src={logo} alt="logo-img" id="logo" />
                <img src={loto} alt="loto-img" id="loto" />
            </div>
            <div id="form">

                <img src={profile} alt="profile-img" id="profile" />
                <h2>
                    <b>
                        Acessar o Sistema
                </b>
                </h2>
                <Form onSubmit={handleSubmit}>
                    <label htmlFor={"login"}>Usuário</label>
                    <Input className="form-control" placeholder="Insira aqui seu email" type="text" name="login" id="login" />
                    <label htmlFor={"passoword"}>Senha</label>
                    <Input className="form-control" placeholder="Insira aqui sua senha" type="password" name="password" id="password" />
                    <button type="submit">{loading ? "carregando..." : "Login"}</button>
                </Form>
            </div>
        </Container>
    );
}

export default Signin;