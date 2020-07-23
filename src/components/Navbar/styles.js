import styled from 'styled-components';

export const Container = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap');
  background: #ac2f97;
  display:flex;
  flex:1;
  margin: 0;
  flex-direction: row;
  align-items: center;
  padding:30px;
  border-radius: 10px;
  justify-content: space-between;
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
`;
