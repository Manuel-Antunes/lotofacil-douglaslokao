import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';

import Navbar from '../../components/Navbar';
import profile from '../../assets/logo2.png'
import api from '../../services/api';
import { toast } from 'react-toastify';

class Cadastro extends React.Component {
    state = {
        loading: false
    }
    async handlerSubmit({ name, cpf, email, login, telefone, password, passwordConfirm }) {
        const admin = document.getElementById("admin").checked;
        var nameV = "";
        if (password === passwordConfirm) {
            try {
                const { data } = await api.post("/user", {
                    name,
                    cpf,
                    email,
                    login,
                    telefone,
                    password,
                    loto_fk: 1,
                    admin
                });
                nameV = data.name;
            } catch (err) {
                return toast.error("Ocorreu um erro ao cadastrar o usuário");
            }
            toast.success(`usuario ${nameV} cadastrado com sucesso`);
        }else{
            toast.error("As senhas digitadas não batem");
        }
    }
    render() {
        const { loading } = this.state;
        return (
            <>
                <Navbar name={this.props.profile.name} admin={this.props.profile.admin} />
                <Container>
                    <img src={profile} alt="profile-img" id="profile" />
                    <h2>
                        Cadastrar Usuários
                    </h2>
                    <Form onSubmit={this.handlerSubmit}>
                        <div>
                            <label htmlFor={"Nome"}>Nome</label>
                            <Input className="form-control" placeholder="Ex.: Manuel Antunes" type="text" name="name" id="name" />
                        </div>
                        <div>
                            <label htmlFor={"cpf"}>C.P.F</label>
                            <Input className="form-control cpf-mask" placeholder="Ex.: 000.000.000-00" type="text" name="cpf" id="cpf" />
                        </div>
                        <div>
                            <label htmlFor={"Email"}>Email</label>
                            <Input className="form-control" placeholder="Ex.: meuemail@gmail.com" type="email" name="email" id="email" />
                        </div>
                        <div>
                            <label htmlFor={"Login"}>Usuário</label>
                            <Input className="form-control" placeholder="Ex.: Manuel_Antunes_55" type="text" name="login" id="login" />
                        </div>
                        <div>
                            <label htmlFor={"Senha"}>Senha</label>
                            <Input className="form-control" placeholder="Campo de senha" type="password" name="password" id="password" />
                        </div>
                        <div>
                            <label htmlFor={"ConfirmSenha"}>Confirmar Senha</label>
                            <Input className="form-control" placeholder="Repita a senha" type="password" name="passwordConfirm" id="passwordConfirm" />
                        </div>
                        <div>
                            <label htmlFor={"Telefone"}>Telefone</label>
                            <Input placeholder="Ex.: (00) 00000-0000" className="form-control cel-sp-mask" type="text" name="telefone" id="telefone" />
                        </div>
                        <div>
                            <label htmlFor={"Admin"}>Admin</label>
                            <Input className="form-control" type="checkbox" name="admin" id="admin" />
                        </div>
                        <div id={"submit"}>
                            <button type="submit">{loading ? "Criando" : "Cadastrar Usuário"}</button>
                        </div>
                    </Form>
                </Container>
            </>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Cadastro);