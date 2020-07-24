import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './styles';
import logo from '../../assets/logotrevo.fw.png';
import loto from '../../assets/lotofacil.fw.png';
import propTypes from 'prop-types';
import { signOut } from '~/store/models/auth/actions';
import { useDispatch } from 'react-redux';

function Navbar({ name }) {
    const dispatch = useDispatch();
    function handleSignOut(){
        dispatch(signOut());
    }
    return (
        <Container>
            <div>
                <img src={logo} alt="" />
                <img src={loto} alt="" />
            </div>
            <div>
                <Link to={"/dashboard"}>Criar Jogos</Link>
                <Link to={"/tables"}>Jogos Salvos</Link>
                <Link onClick={handleSignOut}>{name + " (Sair)"}</Link>
            </div>
        </Container>
    );
}
Navbar.propTypes = {
    name: propTypes.string.isRequired
}

export default Navbar;