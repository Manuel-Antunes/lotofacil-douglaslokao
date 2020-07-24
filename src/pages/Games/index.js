import React from 'react';

import { Container, Game, Pagination } from './styles';
import Navbar from '../../components/Navbar';
import { connect } from 'react-redux';
import api from '~/services/api';
import { toast } from 'react-toastify';
class Games extends React.Component {
    state = {
        page: 1,
        games: [],
        aLength: 1
    }
    async componentDidMount() {
        const { data } = await api.get('/tables/games?id=' + this.props.match.params.id + "&page=" + this.state.page);
        this.setState({
            games: data.array,
            aLength: data.aLength>=1?data.aLength:1
        })
        // this.setState({
        //     games: data
        // })
    }
    async handlerPageUp(a) {
        if (a.state.page < Math.trunc(a.state.aLength) / 10) {
            const num = a.state.page;
            await a.setState({
                page: num + 1
            })
            try {
                const { data } = await api.get('/tables/games?id=' + a.props.match.params.id + "&page=" + a.state.page);
                a.setState({
                    games: data.array
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
                const { data } = await api.get('/tables/games?id=' + a.props.match.params.id + "&page=" + a.state.page);
                a.setState({
                    games: data.array
                })
            } catch{
                return toast.error("ocorreu um erro");
            }
        }
    }
    render() {
        const { games } = this.state;
        const a = this.state.page;
        return (
            <>
                <Navbar name={this.props.profile.name} />
                <Container>
                    {
                        games.map((game, index) => (
                            <Game key={index}>
                                <b>
                                    {"Jogo " + (index + 1 + ((this.state.page - 1) * 10))}
                                </b>
                                <div>
                                    {
                                        JSON.parse(game).map((button) => (
                                            <button>{button}</button>
                                        ))
                                    }
                                </div>
                            </Game>
                        ))
                    }
                </Container>
                <Pagination>
                    <button onClick={() => { this.handlerPageDown(this) }}>
                        Anterior
                   </button>
                    <button onClick={() => { this.handlerPageUp(this) }}>
                        Proximo
                   </button>
                    <spam>Page:{a}/{Math.trunc(this.state.aLength/ 10)>=1?Math.ceil(this.state.aLength/ 10):1 }</spam>
                </Pagination>
            </>
        )
    }
}
const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Games);