import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    margin: 40px;
    h2{
        font-family: 'Orbitron', sans-serif;
    }
    div{
        margin-top: 10px;
        border-radius: 20px;
        padding: 10px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        border: solid 1px black;
        flex-wrap: wrap;
    }
    @media (max-width: 720px){
        h2{
            font-size: 20px;
        }
        div{        
            border: none;
        }
        text-align: center;
    }
`;
export const Plan = styled.span`
    display: flex;
    flex-direction: column;
    border: solid 1px #ac2f97;
    align-items: center;
    label{
        margin-top: 20px;
        font-family: 'Orbitron', sans-serif;
    }
    img{
        width:100%;
    }
    button{font-family: 'Orbitron', sans-serif;
        font-size:15px;
        margin-left: 10px;
        width: 150px;
        height: 30px;
        border-radius: 10px;
        border:solid #4732a3;
        background-color: #6a47e1;
        color: #FFF;
        transition: background 0.2s;
        &:focus{
            outline: none;
        }
        &:hover{
            background-color : ${darken(0.1, "#6a47e1")};
            cursor: pointer;
        }
    }
    width: 250px;
    height: 300px;
    margin: 20px;
`;
