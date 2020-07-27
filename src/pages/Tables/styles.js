import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    display:flex;
    justify-content: center;
    button{
        background: none;
        border: none;
        &:hover{
            cursor: pointer;
        }
    }
    @media(max-width: 720px){
        flex-direction: row;
    }
`;
const rotate = keyframes`
    form {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const GameTable = styled.table.attrs(props => ({
    loading: props.loading
}))`
        img{
            transition: border 0.2s;
            &:hover{
                border: 2px solid #ac2f97;
                border-radius: 50%;
            }
        }
        align-items: center;
        font-family: Arial, sans-serif;
        width: 1240px;
        margin: 20px;
        border: solid 2px #ac2f97;
        background-image: linear-gradient(#fff,#e0dfe1);
        border-radius: 10px;
        img{
            width: 30px;
            margin-right: 10px;
        }
        th,tr,td {
            text-align: center; 
            vertical-align: middle;
            height: 40px;
        }
        ${props => props.loading && 
            css`
            display:flex;
            align-content: center;
            justify-content: center;
            svg{
                animation: ${rotate} 2s linear infinite;
            }
        `}
        @media(max-width: 720px){
            font-size: 10px;
            width: 95%;
            img{
                width:20px;
            }
        }
`;

export const Pagination = styled.div`
    padding-right:90px;
    margin:20px;
    float: right;
    font-size:30px;
    font-family: 'Orbitron',sans-serif;
    font-size:20px;
    button{
        padding: 6px;
        width: 60px;
        border-radius: 10px;
        border: solid 2px #ac2f97;
        margin-right: 10px;
        &:focus{
            outline: none;
        }
        &:hover{
            cursor: pointer;
        }
    }
    @media(max-width: 720px){
        float: none;
        padding:0;
        font-size:15px;
        display: flex;
        justify-content: center;
        align-items: center;
    }

`;