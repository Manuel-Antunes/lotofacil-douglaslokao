import React from 'react';
import { connect } from 'react-redux';
import { Container, Comparator, GameTable } from './styles';
import Navbar from '~/components/Navbar';
import { toast } from 'react-toastify';
import api from '~/services/api';
import { updateMainScreen } from '~/store/models/user/actions';
import { formatPrice } from '~/util/format';
class Comparation extends React.Component {
    state = {
        game: [],
        selectedNumbers: [],
        pontos: [],
        size: 0,
        gain: 0
    }
    async handlerComparator() {
        const { selectedNumbers } = this.state;
        if (this.state.selectedNumbers.length === 15) {
            try {
                const { data } = await api.put('/tables?id=' + this.props.match.params.id, { selectedNumbers });
                var gain = 0;
                const [onze, doze, treze, quatorze, quinze] = data.pontos;
                await api.put('/user/check', { onze, doze, treze, quatorze, quinze });
                const { dispatch } = this.props;
                dispatch(updateMainScreen(onze, doze, treze, quatorze, quinze));
                data.pontos.forEach((e, index) => {
                    gain += e * (index === 0 ? 5 : index === 1 ? 10 : index === 2 ? 25 : index === 3 ? 1300 : 2000);
                })
                await this.setState({
                    pontos: data.pontos,
                    size: data.size,
                    gain
                })
            } catch {
                toast.error("Ocorreu um erro ao efetuar a comparação, por favor tente novamente");
            }
        } else {
            toast.error("Selecione todos os 15 números");
        }
    }
    render() {
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        return (
            <>
                <Navbar name={this.props.profile.name} />
                <Container >
                    <Comparator>
                        <h2>Comparator</h2>
                        <div>
                            {
                                array.map(element => (
                                    <button id={"button " + element} onClick={(e) => {
                                        const { selectedNumbers } = this.state;
                                        if (selectedNumbers.indexOf(element) !== -1) {
                                            selectedNumbers.splice(selectedNumbers.indexOf(element), 1);
                                            document.getElementById("button " + element).style.backgroundColor = "#EEE";
                                            document.getElementById("button " + element).style.borderColor = "#ac2f97";
                                            document.getElementById("button " + element).style.color = "black";

                                        } else {
                                            if (selectedNumbers.length < 15) {
                                                selectedNumbers.push(element);
                                                document.getElementById("button " + element).style.backgroundColor = "#ac2f97";
                                                document.getElementById("button " + element).style.borderColor = "#999";
                                                document.getElementById("button " + element).style.color = "#FFF";
                                            } else {
                                                toast.error("O numero maximo de elementos selecionaveis é 15"
                                                );
                                            }
                                        }
                                        this.setState({
                                            selectedNumbers
                                        });
                                    }} key={element}>{element}</button>
                                ))
                            }
                        </div>
                        <button onClick={() => { this.handlerComparator() }} id="Comparator">
                            Conferir Jogos
                        </button>

                    </Comparator>
                    <GameTable>
                        {
                            this.state.pontos.length !== 0 ? (
                                <>
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Valor do Acerto</th>
                                                <th>Quantidade</th>
                                                <th>Premiação</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.pontos.map((column, index) => (
                                                    <tr key={column}>
                                                        <td>
                                                            <tr>
                                                                <td>
                                                                    {
                                                                        (11 + index) + " pontos"
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </td>
                                                        <td>
                                                            <tr>
                                                                <td>
                                                                    {
                                                                        parseInt(column)
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </td>
                                                        <td>
                                                            <tr>
                                                                <td>
                                                                    {
                                                                        formatPrice(column * (index === 0 ? 5 : index === 1 ? 10 : index === 2 ? 25 : index === 3 ? 1300 : 2000))
                                                                    }
                                                                </td>
                                                            </tr>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <div>
                                        <h2>
                                            Valor Investido:{
                                                formatPrice(this.state.size * 2.50)
                                            }
                                        </h2>
                                        <h2>
                                            Premiação Total:{
                                                formatPrice(this.state.gain)
                                            }
                                        </h2>
                                        <h2 style={{ color: this.state.gain - (this.state.size * 2.50) > 0 ? "green" : "red" }}>
                                            Lucro:{
                                                formatPrice(this.state.gain - (this.state.size * 2.50))
                                            }
                                        </h2>
                                    </div>
                                </>
                            ) : (<h3>Ao escolher os valores será gerada a tabela</h3>)
                        }
                    </GameTable>
                </Container>
            </>
        )
    }
}
const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Comparation);