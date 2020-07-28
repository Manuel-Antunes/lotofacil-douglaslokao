import React from 'react';
import { connect } from 'react-redux';
import api from '~/services/api';

import { Container, Plan } from './styles';
import Navbar from '~/components/Navbar';
import plan from '~/assets/Plan.jpeg'
import { toast } from 'react-toastify';

class Contract extends React.Component {
    async handlerContract(plan) {
        try {
            await api.put(`user/contract/${plan}?id=` + this.props.match.params.id);
        } catch (err) {
            return toast.error("Não foi possivel contratar o plano");
        }
        toast.success("Plano Contratado Com sucesso");
    }
    render() {
        return (
            <>
                <Navbar name={this.props.profile.name} admin={this.props.profile.admin} />
                <Container>
                    <h2>
                        Planos de Acesso
                    </h2>
                    <div>
                        <Plan>
                            <img src={plan} alt="plan 1" />
                            <label htmlFor="button">30 dias de Acesso</label>
                            <button onClick={() => {
                                this.handlerContract(1)
                            }}>
                                Selecionar
                            </button>
                        </Plan>
                        <Plan>
                            <img src={plan} alt="plan 2" />
                            <label htmlFor="button">120 dias de Acesso</label>
                            <button onClick={() => {
                                this.handlerContract(2)
                            }}>
                                Selecionar
                            </button>
                        </Plan>
                        <Plan>
                            <img src={plan} alt="plan 3" />
                            <label htmlFor="button">1 ano de Acesso</label>
                            <button onClick={() => {
                                this.handlerContract(3)
                            }}>
                                Selecionar
                            </button>
                        </Plan>
                        <Plan>
                            <img src={plan} alt="plan 4" />
                            <label htmlFor="button">Acesso Vitalicio</label>
                            <button onClick={() => {
                                this.handlerContract(4)
                            }}>
                                Selecionar
                            </button>
                        </Plan>
                    </div>
                </Container >
            </>
        );
    }
}

const mapStateToProps = state => ({
    profile: state.user.profile
});

export default connect(mapStateToProps)(Contract);