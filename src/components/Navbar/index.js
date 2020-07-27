import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Hamburguer } from './styles';
import logo from '../../assets/logotrevo.fw.png';
import sidebar from '../../assets/sidebar.svg';
import loto from '../../assets/lotofacil.fw.png';
import propTypes from 'prop-types';
import { signOut } from '~/store/models/auth/actions';
import { useDispatch } from 'react-redux';

function Navbar({ name }) {
    const dispatch = useDispatch();
    function handleSignOut() {
        dispatch(signOut());
    }
    function toggle() {
        const a = document.getElementById("hamburguer")
        a.style.display === "" ? a.style.display = "flex" : a.style.display = "";
        a.style.width === "" ? a.style.width = "60%" : a.style.width = "";
    }
    return (
        <>
            <Container>
                <div>
                    <img src={logo} alt="logo" />
                    <img src={loto} alt="loto" />
                </div>
                <button onClick={toggle} className={"menu"}>
                    <img src={sidebar} alt="sidebar button" />
                </button>
                <div id={"nav"}>
                    <Link to={"/dashboard"}>Criar Jogos</Link>
                    <Link to={"/tables"}>Jogos Salvos</Link>
                    <Link onClick={handleSignOut}>{name + " (Sair)"}</Link>
                </div>

            </Container>
            <Hamburguer id={"hamburguer"} >
                <Link to={"/dashboard"}>Criar Jogos</Link>
                <Link to={"/tables"}>Jogos Salvos</Link>
                <Link onClick={handleSignOut}>{name + " (Sair)"}</Link>
            </Hamburguer>
        </>
    );
}
Navbar.propTypes = {
    name: propTypes.string.isRequired
}

export default Navbar;