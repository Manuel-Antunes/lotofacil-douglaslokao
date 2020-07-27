import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { Container, Create, Scores, Comparator } from './styles';
import Navbar from '../../components/Navbar';
import { formatPrice } from '../../util/format';
import api from '~/services/api';
import { connect } from 'react-redux';

class Dashboard extends Component {
    state = {
        selectedNumbers: [],
        resultado: [],
        numeroDeApostas: 0,
        jogosGerados: [],
        scores: [{ qtd: 11, value: 200 }, { qtd: 12, value: 300 }, { qtd: 13, value: 500 }, { qtd: 14, value: 900 }, { qtd: 15, value: 1500 }]
    }
    gerarLista(m) {
        var sequencias = [];
        var caracteresUsaveis = this.gerarUsaveis(25);
        let sequenciaAtual = [];
        for (let i = 0; i < m; i++) {
            sequenciaAtual.push(caracteresUsaveis[i]);
        }
        sequencias.push(JSON.stringify(sequenciaAtual));
        while (sequencias.length - 1 !== this.calcualrPossibilidade(m, caracteresUsaveis.length)) {
            let y = 0;

            for (let i = m - 1; i >= 0; i--) {
                let test = false;
                let h = 0;
                for (let j = sequenciaAtual.length - 1; j >= 0; j++) {
                    if (sequenciaAtual[j] === caracteresUsaveis[(caracteresUsaveis.length - 1) - h]) {
                        test = true;
                    } else {
                        test = false;

                        break;
                    }
                    h++;
                }
                if (test) {
                    return sequencias;
                }
                if (i !== sequenciaAtual.length - 1) {
                    if (sequenciaAtual[i + 1] === caracteresUsaveis[caracteresUsaveis.length - (y - 1) - 1]) {
                        if (sequenciaAtual[0] !== caracteresUsaveis[(caracteresUsaveis.length - 1) - (sequenciaAtual.length - 1)]) {
                            sequenciaAtual[i] = caracteresUsaveis[caracteresUsaveis.indexOf(sequenciaAtual[i]) + 1];
                            for (let j = i + 1; j < sequenciaAtual.length; j++) {
                                sequenciaAtual[j] = caracteresUsaveis[caracteresUsaveis.indexOf(sequenciaAtual[i]) + j - i];
                            }
                            sequencias.push(JSON.stringify(sequenciaAtual));
                        } else if (sequenciaAtual[0] === caracteresUsaveis[(caracteresUsaveis.length - 1) - (sequenciaAtual.length - 1)] && sequenciaAtual[sequenciaAtual.length - 1] === caracteresUsaveis[caracteresUsaveis.length - 1]) {
                            return sequencias;
                        }
                    }
                } else {
                    if (sequenciaAtual[i] !== caracteresUsaveis[caracteresUsaveis.length - 1]) {
                        sequenciaAtual[i] = caracteresUsaveis[caracteresUsaveis.indexOf(sequenciaAtual[i]) + 1];
                        sequencias.push(JSON.stringify(sequenciaAtual));
                    }
                }
                y++;
            }
        }
        return sequencias;
    }

    calcualrPossibilidade(m, n) {
        return this.factorial(n) / (this.factorial((n - m)) * this.factorial(m));
    }

    factorial(n) {
        var vn = n;
        for (let i = n - 1; i > 0; i--) {
            vn = vn * i;
        }
        return vn;
    }

    gerarUsaveis(quantos) {
        var nuk = [];
        var ajeitado = [];
        for (let i = 0; i < this.state.selectedNumbers.length; i++) {
            nuk.push(parseInt(this.state.selectedNumbers[i]));
        }
        for (let i = 1; i <= quantos; i++) {
            if (nuk.indexOf(i) === -1) {
                ajeitado.push(i);
            }
        }
        return ajeitado;
    }

    shuffle(array) {
        let currentIndex = array.length,
            temporaryValue, randomIndex;

        while (0 !== currentIndex) {

            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }
    gerarJogos(a, sequencias) {
        let jogosGerados = [];
        for (let i = 0; i < a; i++) {
            const jogo = sequencias[i];
            jogosGerados.push(jogo);
        }
        return jogosGerados;
    }

    async handlerSalvar() {
        const games = this.gerarJogos(parseInt(this.state.numeroDeApostas), this.shuffle(this.gerarLista(15)));
        try {
            await api.post("/tables", { games });
        } catch (err) {
            toast.error("ocorreu um erro, verifique sua conexão ou se seu contrato está em dia");
            return
        }
        toast.success("jogos gerados!");
    }

    async componentDidMount() {
        console.log(this.props);
        await this.setState({
            scores: [
                {
                    qtd: this.props.profile.onze,
                    value: ((this.props.profile.onze * 5) - (this.props.profile.onze * 2.50))
                },
                {
                    qtd: this.props.profile.doze,
                    value: ((this.props.profile.doze * 10) - (this.props.profile.doze * 2.50))
                },
                {
                    qtd: this.props.profile.treze,
                    value: ((this.props.profile.treze * 25) - (this.props.profile.treze * 2.50))
                },
                {
                    qtd: this.props.profile.quatorze,
                    value: ((this.props.profile.quatorze * 1300) - (this.props.profile.quatorze * 2.50))
                },
                {
                    qtd: this.props.profile.quinze,
                    value: ((this.props.profile.quinze * 2000) - (this.props.profile.quinze * 2.50))
                },
            ]
        });
    }
    render() {
        const { scores } = this.state;
        const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];
        const hotNumber = [2, 3, 5, 6, 8, 9, 12, 15, 17, 18, 19, 21, 23, 24, 25];
        const possiblePoints = [11, 12, 13, 14, 15];
        return (
            <>
                <Navbar name={this.props.profile.name} admin={this.props.profile.admin} />
                <Container>
                    <Create>
                        <b>Criar Jogos</b>
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
                                            if (selectedNumbers.length < 5) {
                                                selectedNumbers.push(element);
                                                document.getElementById("button " + element).style.backgroundColor = "#ac2f97";
                                                document.getElementById("button " + element).style.borderColor = "#999";
                                                document.getElementById("button " + element).style.color = "#FFF";
                                            } else {
                                                toast.error("O numero maximo de elementos selecionaveis é 5"
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
                        <input type="number" name="" max="15503" min="0" defaultValue={0} onChange={e => { this.setState({ numeroDeApostas: e.target.value }) }} />
                        <label htmlFor="input">Numero de Jogos</label>
                        <button type="submit" onClick={e => {
                            e.preventDefault();
                            if (this.state.numeroDeApostas > 0 && this.state.numeroDeApostas <= 2000) {
                                if (this.state.selectedNumbers.length === 5) {
                                    this.handlerSalvar();
                                } else {
                                    toast.error("Selecione Todos os 5 numeros");
                                }
                            } else {
                                toast.error("insira um numero válido de apostas (1|2000)");
                            }
                        }}>Gerar Jogos</button>
                    </Create>
                    <Scores>
                        <table>
                            <thead>
                                <tr>

                                    <th>Acerto</th>
                                    <th>Quantidade</th>
                                    <th>Prêmio</th>

                                </tr>
                            </thead>
                            <tbody>
                                <td>
                                    {
                                        possiblePoints.map(point => (
                                            <tr key={point}>
                                                {point + " Pontos"}
                                            </tr>
                                        ))
                                    }
                                </td>
                                <td>
                                    {
                                        scores.map(score => (
                                            <tr key={score.qtd}>
                                                {score.qtd}
                                            </tr>
                                        ))
                                    }
                                </td>
                                <td>
                                    {
                                        scores.map(score => (
                                            <tr key={score.value}>
                                                {formatPrice(score.value)}
                                            </tr>
                                        ))
                                    }
                                </td>
                            </tbody>
                        </table>
                    </Scores>
                </Container>
                <div style={{ margin: "0 auto" }}>
                    <Comparator>
                        <h2>Números Sorteados com Maior Frequência</h2>
                        <div>
                            {
                                array.map((element) => (
                                    hotNumber.map((number) => element === number ? (
                                        < button id={"button " + element} key={element}>{element}</button>
                                    ) : null)
                                ))
                            }
                        </div>

                    </Comparator>
                </div>
            </>
        );
    }
}
const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Dashboard);