import React from 'react';
import { connect } from 'react-redux';
import { Container } from './styles';
import { Form, Input } from '@rocketseat/unform';

import Navbar from '../../components/Navbar';
import profile from '../../assets/logo2.png'
import lapis from '../../assets/lapis.jpeg'
import api from '../../services/api';
import { toast } from 'react-toastify';

class Upadate extends React.Component {
    state = {
        loading: false,
    }
    async componentDidMount() {
        const { data } = await api.get("/user/" + this.props.match.params.id);
        document.getElementById("name").value = data.name;
        document.getElementById("email").value = data.email;
        document.getElementById("telefone").value = data.telefone;
        document.getElementById("login").value = data.login;
        document.getElementById("cpf").value = data.cpf;
        document.getElementById("admin").checked = data.admin;
    }
    handlerUpdate(id) {
        document.getElementById(id).disabled ? document.getElementById(id).disabled = false : document.getElementById(id).disabled = true
    }
    async handlerSubmit(id, { name, cpf, email, login, telefone, password, passwordConfirm }) {
        const admin = document.getElementById("admin").checked;
        var nameV = "";
        if (!password) {
            try {
                await api.put("/user/" + id, {
                    name,
                    cpf,
                    email,
                    login,
                    telefone,
                    admin
                });
            } catch (err) {
                return toast.error("Ocorreu um erro ao cadastrar o usuário");
            }
            return toast.success(`usuario ${nameV} atualizado com sucesso`);
        }
        if (password === passwordConfirm) {
            try {
                await api.put("/user/" + id, {
                    name,
                    cpf,
                    email,
                    login,
                    telefone,
                    password,
                    admin
                });
            } catch (err) {
                return toast.error("Ocorreu um erro ao cadastrar o usuário");
            }
            toast.success(`usuario ${nameV} atualizado com sucesso`);
        } else {
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
                        Atualizar Usuário
                    </h2>
                    <Form onSubmit={(data) => {
                        this.handlerSubmit(this.props.match.params.id, data)
                    }}>
                        <div>
                            <label htmlFor={"Nome"}>Nome</label>
                            <Input className="form-control" disabled={true} placeholder="Ex.: Manuel Antunes" type="text" name="name" id="name" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("name");
                            }} />
                        </div>
                        <div>
                            <label htmlFor={"cpf"}>C.P.F</label>
                            <Input className="form-control cpf-mask" disabled={true} placeholder="Ex.: 000.000.000-00" type="text" name="cpf" id="cpf" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("cpf");
                            }} />

                        </div>
                        <div>
                            <label htmlFor={"Email"}>Email</label>
                            <Input className="form-control" disabled={true} placeholder="Ex.: meuemail@gmail.com" type="email" name="email" id="email" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("email");
                            }} />

                        </div>
                        <div>
                            <label htmlFor={"Login"}>Usuário</label>
                            <Input className="form-control" disabled={true} placeholder="Ex.: Manuel_Antunes_55" type="text" name="login" id="login" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("login");
                            }} />

                        </div>
                        <div>
                            <label htmlFor={"Senha"}>Senha</label>
                            <Input className="form-control" disabled={true} placeholder="Campo de senha" type="password" name="password" id="password" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("password");
                                this.handlerUpdate("passwordConfirm");
                            }} />

                        </div>
                        <div>
                            <label htmlFor={"ConfirmSenha"}>Confirmar Senha</label>
                            <Input className="form-control" disabled={true} placeholder="Repita a senha" type="password" name="passwordConfirm" id="passwordConfirm" />
                        </div>
                        <div>
                            <label htmlFor={"Telefone"}>Telefone</label>
                            <Input placeholder="Ex.: (00) 00000-0000" disabled={true} className="form-control cel-sp-mask" type="text" name="telefone" id="telefone" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("telefone");
                            }} />

                        </div>
                        <div>
                            <label htmlFor={"Admin"}>Admin</label>
                            <Input className="form-control" disabled={true} type="checkbox" name="admin" id="admin" />
                            <img src={lapis} alt="editar telefone" onClick={() => {
                                this.handlerUpdate("admin");
                            }} />

                        </div>
                        <div id={"submit"}>
                            <button type="submit">{loading ? "Aplicando..." : "Aplicar"}</button>
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

export default connect(mapStateToProps)(Upadate);