import React from 'react';
import lixeira from '../../assets/lixeira.fw.png';
import check from '../../assets/check.fw.png';
import lupa from '../../assets/lupa.fw.png';
import { Container, GameTable, Pagination } from './styles';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { formatPrice } from '../../util/format';
import { connect } from 'react-redux';
import api from '~/services/api';
import { toast } from 'react-toastify';
import pt from "date-fns/locale/pt"
import { closestIndexTo } from 'date-fns';
import { format, parseISO } from 'date-fns';
class Tables extends React.Component {
    state = {
        tables: [],
        page: 1,
        aLength: 1
    }
    async handerConstruct() {
        const { data } = await api.get('/tables?page=' + this.state.page);
        console.log(data);
        return data;
    }
    async componentDidMount() {
        const a = await this.handerConstruct();
        this.setState({ tables: a.GameTables, aLength: a.aLength });
        console.log()

    }
    async handlerPageUp(a) {
        if (a.state.page < Math.trunc(a.state.aLength) / 20) {
            const num = a.state.page;
            await a.setState({
                page: num + 1
            })
            try {
                const { data } = await api.get('/tables?page=' + this.state.page);
                a.setState({
                    tables: data.GameTables, aLength: data.aLength
                })
            } catch{
                return toast.error("ocorreu um erro");
            }
        }
    }
    async handlerPageDown(a) {
        if (a.state.page > 1) {
            await a.setState({
                page: a.state.page - 1
            })
            try {
                const { data } = await api.get('/tables?page=' + this.state.page);
                console.log(data);
                a.setState({
                    tables: data.GameTables, aLength: data.aLength
                })
            } catch{
                return toast.error("ocorreu um erro");
            }
        }
    }
    async handlerDelete(id, index) {
        console.log(id);
        try {
            await api.delete('/tables/' + id);
        } catch{
            return toast.error("ocorreu um erro ao remover o jogo");
        }
        toast.success('jogo deletado com sucesso');
        const { tables } = this.state;
        tables.splice(index, 1);
        this.setState({
            tables
        })
    }
    handlerCheck(checked, e) {
        if (checked) {
            e.preventDefault();
            toast.info("Esse jogo já foi verificado");
        }
    }
    render() {
        const { tables } = this.state;
        return (
            <>
                <Navbar name={this.props.profile.name} />
                <Container>
                    <GameTable>
                        <thead>
                            <tr>
                                <th>Jogo Salvo</th>
                                <th>Quantidade de jogos</th>
                                <th>Ações</th>
                                <th>Valor Investido</th>
                                <th>Valor Ganho</th>
                                <th>Lucro</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tables.map((column, index) => (
                                    <tr key={column}>
                                        <td>
                                            <tr>
                                                <td>
                                                    {
                                                        format(parseISO(column.createdAt), "'dia' dd 'de' MMMM', às' H:mm'h'", { locale: pt })
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    {
                                                        parseInt(column.games)
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    <Link onClick={(e) => {
                                                        this.handlerCheck(column.checked, e);
                                                    }
                                                    } to={"/tables/check/" + column._id} params={{ id: column.id }}>
                                                        <img src={check} alt="" />
                                                    </Link>
                                                    <Link to={"/tables/games/" + column._id} params={{ id: column.id }}>
                                                        <img src={lupa} alt="" />
                                                    </Link>
                                                    <button>
                                                        <img src={lixeira} alt="" onClick={() => { this.handlerDelete(column._id, index) }} />
                                                    </button>
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    {
                                                        formatPrice(column.games * 2.50)
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td>
                                                    {
                                                        column.gain || column.gain == 0 ? formatPrice(column.gain) : "Conferir"
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                        <td>
                                            <tr>
                                                <td style={column.gain || column.gain == 0 ? { color: parseFloat(column.gain) - (parseFloat(column.games) * 2.50) > 0 ? "green" : "red" } : {}}>
                                                    {
                                                        column.gain || column.gain == 0 ? formatPrice(parseFloat(column.gain) - (parseFloat(column.games) * 2.50)) : "Conferir"
                                                    }
                                                </td>
                                            </tr>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </GameTable>
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
        )
    }
}
const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Tables);