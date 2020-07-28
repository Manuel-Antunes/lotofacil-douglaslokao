import styled from 'styled-components';
import { darken } from 'polished';
export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin: 30px;
    img{
        width: 5em;
        margin: 20px;
    }
    h2, label{
        font-family: "Orbitron", sans-serif;
    }
    form{
        background-image: linear-gradient(#fff,#e0dfe1);
        margin: 20px;
        img{
            border-radius: 50%;
            width: 30px;
            &:hover{
                cursor:pointer;
            }
        }
        border: solid 1px #AAA;
        border-radius: 20px;
        padding: 20px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        width: 80%;
        #submit{
            button{
                padding:10px;
                width: fit-content;
                height: fit-content;
                border-radius: 50px;
                border: 1px solid #AAA;
                font-family: "Orbitron", sans-serif;
                background-color: #ac2f97;
                font-weight: bold;
                color: #FFF;
                margin-top: 20px;
                transition: background 0.2s;
                &:focus{
                    outline: none;
                }
                &:hover{
                    background-color: ${darken(0.1, "#ac2f97")}
                }
            }
        }
        div{
            margin: 10px;
            input{
                font-family: Arial, Helvetica, sans-serif;
                padding: 8px;
                border-radius: 20px;
                width: 200px;
                border: solid 1px #ac2f97;
            }
            #name{
                width: 200px;
            }
            #email{
                width: 250px;
            }
            #admin{
                height: 80%;
                width: 80%;
            }
            display: flex;
            flex-direction: column;
        }
    }
    @media (max-width: 720px) {
        h2, label{
            font-size: 1em;
            font-family: "Orbitron", sans-serif;
        }
        form{
            background-image: none;
            width: 100%;
            border:none;
            padding: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            div{
                align-items: center;
            #name{
                width: 20em;
            }
            #email{
                width: 20em;
            }
            #admin{
                height: 3em;
                width: 3em;
            }
            input{
                width: 20em;
            }
        }
        }
    }
`;
