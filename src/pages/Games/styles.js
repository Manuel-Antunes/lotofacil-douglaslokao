import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div.attrs(props => ({
    loading: props.loading
}))`
    
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 10px;
    ${props => props.loading &&
        css`
            display: flex;
            align-content: center;
            justify-content: center;
            svg{
                animation: ${rotate} 2s linear infinite;
            }
        `}
    padding: 20px;
    @media(max-width: 720px){
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
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
export const Game = styled.div`
    width:250px;
    padding:20px 0;
    background-image:   linear-gradient(#fff,#e0dfe1);
    border: solid 1px #ac2f97;
    text-align:center;
    font-family: sans-serif;
    
    div{
    margin-top:20px;
    justify-content: center;
    display: flex;
    flex-wrap: wrap;
    align-content: center;
        button{
            border: solid 2px #ac2f97;
            background: #ac2f97;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 100%;
            height: 40px;
            color: #FFF;
            transition: background 0.1s,color 0.1s;
            width: 40px;
            &:focus{
                outline: none;
            }
        }
    }
`;

export const Pagination = styled.div`
    margin:20px;
    margin-right:90px;
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
