import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  background: #ac2f97;
  display:flex;
  flex:1;
  margin: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding:30px;
  box-shadow: black;
  button{
    background: none;
    border: none;
    &:hover{
      cursor: pointer;
    }
  }
  .menu{
    display: none;
  }
  img{
    height: 90px;
  }
  div{
    a{
      color: #FFF;
      font: 20px 'Orbitron', sans-serif;;
      margin-right:50px;
      text-decoration: none;
      transition: border 0.2s;
      &:hover{
        height:100%;
        border-bottom: 5px solid #7159c1;
      }
    }
  }
  @media(max-width:720px) {
      .menu{
      display: block;
      }
      #nav{
        display: none;
      }
      img{
      height: 30px;
      }
  }
`;
export const Hamburguer = styled.div`
  display: none;
  @media(max-width:720px) {
    display: none;
    position: absolute;
    text-align: center;
    padding: 20px;
    border-bottom-left-radius: 10px;
    flex-direction: column;
    width: 40%;
    font-family: "Orbitron", Helvetica, sans-serif;
    font-weight: bold;
    height: fit-content;
    background: #ac2f97;
    right: 0;
    a{
      text-decoration: none;
      color: #FFF;
      margin-bottom: 10px;
    }
  }
`;