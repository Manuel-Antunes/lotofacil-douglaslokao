import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
    form {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`
export const Container = styled.div.attrs(props => ({
    loading: props.loading
}))`
        display: flex;
        align-items: center;
        justify-content: center;
        button{
        background: none;
        border: none;
        &:hover{
                cursor: pointer;
            }
        }
        table{
            align-items: center;
            font-family: Arial, sans-serif;
            width: 1240px;
            margin: 20px;
            border: solid 2px #ac2f97;
            background-image: linear-gradient(#fff,#e0dfe1);
            border-radius: 10px;
            img{
                border-radius: 50%;
                transition: border 0.2s;
                width: 30px;
                margin-right: 10px;
                &:hover{
                    border: 2px solid #ac2f97;
                    border-radius: 50%;
                }
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
                font-size: 8px;
                width: 95%;
                img{
                    width:20px;
                }
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
        width: fit-content;
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