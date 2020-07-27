import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 30px 90px;
    @media(max-width: 720px){
        flex-direction:column;
        justify-items: center;
        align-items: center;
        padding: 10px;
    }
`;
export const Create = styled.div`
    font-size: 30px;
    font-family: 'Orbitron', sans-serif;
    display: block;
    div{
        margin-bottom:30px;
        width: 450px;
        margin-top: 30px;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        button{
            font-family: Arial, Helvetica, sans-serif;
            font-size: 20px;
            border: solid 2px #ac2f97;
            background: #EEEFFF;
            margin-right: 5px;
            margin-bottom: 5px;
            border-radius: 100%;
            height: 40px;
            transition: background 0.1s,color 0.1s;
            width: 40px;
            &:focus{
                outline: none;
            }
            &:hover{
                cursor: pointer;
            }
        }
        
    }
    input{
            height:30px;
            border: none;
            border: 2px solid #ac2f97;
            border-top: none;
            margin-right:10px;
            font-family: 'Orbitron', sans-serif;
            width:150px;
            text-align: right;
            background-image:   linear-gradient(#fff,#e0dfe1);
            &:focus{
                outline: none;
            }
        }
    label{
            font-size:15px;
    }
    button[type=Submit]{
        font-family: 'Orbitron', sans-serif;
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
    @media(max-width: 720px){
        display:flex;
        font-size: 15px;
        flex-direction: column;
        align-items:center;
        justify-content: center;
        div{
            margin-bottom:30px;
            width: 90%;
            margin-top: 30px;
            display: flex;
            justify-content: center;
            button{
                border: solid 2px #ac2f97;
                background: #EEEFFF;
                margin-right: 5px;
                font-size: 12px;
                margin-bottom: 5px;
                border-radius: 100%;
                height: 3em;
                transition: background 0.1s,color 0.1s;
                width: 3em;
                &:focus{
                    outline: none;
                }
                &:hover{
                    cursor: pointer;
                }
            }
        }
        button[type=Submit]{
            font-family: 'Orbitron', sans-serif;
            font-size:15px;
            border-radius: 10px;
            width: 100%;
            margin-left: 0;
            margin-top: 10px;
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
    }
`;
export const Scores = styled.div`
    table{
        align-items: center;
        font-family: Arial, sans-serif;
        width: 650px;
        margin: 20px;
        border: solid 2px #ac2f97;
        background-image: linear-gradient(#fff,#e0dfe1);
        border-radius: 10px;
        th,tr,td {
            text-align: center; 
            vertical-align: middle;
            height: 40px;
        }
    }
    @media(max-width: 720px){
        width: 100%;
        display:flex;
        table{
            justify-content: space-between;
            margin: 20px;
            width: 95%;
        }
    }
`;
export const Comparator = styled.div`
    border-radius: 20px;
    display: flex;
    margin: 0 auto;
    width: fit-content;
    justify-content: center;
    flex-direction: column;
    h2{
        font-size: 1em;
        text-align: center;
        font-family: 'Orbitron', sans-serif;
        margin-bottom: 30px;
    }
    div{
        justify-content: center;
        button{
            border: solid 1px black;
            background: #ac2f97;
            margin-right: 2px;
            margin-bottom: 5px;
            border-radius: 100%;
            height: 40px;
            color: #EEEFFF;
            transition: background 0.1s,color 0.1s;
            width: 40px;
            &:focus{
                outline: none;
            }
            &:hover{
                cursor: pointer;
            }
        }
    }
    @media(max-width:720px){
            h2{
                text-align: center;
                font-family: 'Orbitron', sans-serif;
                margin-bottom: 30px;
            }
            div{
                display: flex;
                flex-wrap: wrap;
                padding: 0 20px;
                justify-content: center;
                button{
                    width: 30px;
                    height: 30px;
                }
            }
        }
`;