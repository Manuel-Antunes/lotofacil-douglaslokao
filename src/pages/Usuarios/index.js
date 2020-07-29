import React from 'react';
import { connect } from 'react-redux';
import { Container, Pagination } from './styles';
import lixeira from '../../assets/lixeira.fw.png';
import check from '../../assets/check.fw.png';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import lapis from '../../assets/lapis.jpeg'


import Navbar from '../../components/Navbar';
import api from '~/services/api';

class Usuarios extends React.Component {
    state = {
        users: [],
        page: 1,
        aLength: 1,
        loading: false
    }
    async componentDidMount() {
        const { data } = await api.get("/user?loto=1&page=" + this.state.page);
        this.setState({
            users: data.users,
            aLength: data.size
        });
    }
    async handlerPageUp(a) {
        if (a.state.page < Math.trunc(a.state.aLength) / 20) {
            const num = a.state.page;
            await a.setState({
                page: num + 1,
                loading: true
            })
            try {
                const { data } = await api.get('/tables?page=' + this.state.page);
                a.setState({
                    tables: data.GameTables, aLength: data.aLength, loading: false
                })
            } catch{
                return toast.error("ocorreu um erro");
            }
        }
    }
    async handlerPageDown(a) {
        if (a.state.page > 1) {
            await a.setState({
                page: a.state.page - 1,
                loading: true
            })
            try {
                const { data } = await api.get('/tables?page=' + this.state.page);
                a.setState({
                    tables: data.GameTables, aLength: data.aLength, loading: false
                })
            } catch{
                return toast.error("ocorreu um erro");
            }
        }
    }
    async handlerDelete(user, index) {
        const { users } = this.state;
        if (user.id !== this.props.profile.id) {
            try {
                await api.delete('/users?id=' + user.id, {});
            } catch (err) {
                return toast.error("Ocorreu um erro ao tentar remover o usuário");
            }
            toast.success("Usuário removido com sucesso");
            users.splice(index, 1);
            this.setState({
                users
            });
        }else{
            toast.error("você não pode deletar a si mesmo");
        }
    }
    render() {
        const { users } = this.state;
        return (
            <>
                <Navbar name={this.props.profile.name} admin={this.props.profile.admin} />
                <Container>
                    <table>
                        <thead>
                            <tr>

                                <th>Nome de Usuário</th>
                                <th>Email</th>
                                <th>Usuario</th>
                                <th>Tempo de contrato</th>
                                <th>Editar</th>
                                <th>Planos</th>
                                <th>Excluir</th>

                            </tr>
                        </thead>
                        <tbody>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            {user.name}
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            {user.email}
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            {user.login}
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            {user.remaining_days ? parseInt(user.remaining_days) > 50000 ? "vitalicio" : user.remaining_days : "Sem contrato"}
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <Link to={"/usuarios/update/" + user.id}>
                                                <img src={lapis} alt="editar usuario" />
                                            </Link>
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map(user => (
                                        <tr key={user.id}>
                                            <Link to={"/usuarios/contract/" + user.id}>
                                                <img src={check} alt="contratar planos" />
                                            </Link>
                                        </tr>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    users.map((user, index) => (
                                        <tr key={user.id}>
                                            <button onClick={() => {
                                                this.handlerDelete(user, index)
                                            }}>
                                                <img src={lixeira} alt="excluir usuarios" />
                                            </button>
                                        </tr>
                                    ))
                                }
                            </td>
                        </tbody>
                    </table>
                </Container>
                <Pagination>
                    <button onClick={() => { this.handlerPageDown(this) }}>
                        Anterior
                   </button>
                    <button onClick={() => { this.handlerPageUp(this) }}>
                        Proximo
                   </button>
                    <spam>Page:{this.state.page}/{Math.trunc(this.state.aLength / 20) >= 1 ? Math.ceil(this.state.aLength / 20) : 1}</spam>
                </Pagination>
            </>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Usuarios);