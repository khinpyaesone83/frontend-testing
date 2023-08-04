import styled from "styled-components";

export const Container = styled.div`
  margin: 60px;
  margin-bottom: 0px;
  padding-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerTwo = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const WrapperOne = styled.div`
  display: flex;
  justify-content: center;
  algin-items: center;
  padding: 40px;
  @media screen and (max-width: 765px) {
    padding: 0px;
  }
`;

export const ImgWrapper = styled.div``;
export const WrapperTwo = styled.div`
  padding: 0px 40px;
`;

export const CardContainer = styled.div`
  overflow-y: auto;
  height: 350px;
  margin-bottom: 50px;
`;

export const Img = styled.img`
  width: 100%;
`;

export const Header = styled.div`
  display: flex;
`;
export const Title = styled.h1`
  font-size: 150%;
`;

export const Card = styled.div`
  background: transparent linear-gradient(90deg, #2dc4ea 0%, #3ae7ab 100%) 0% 0%
    no-repeat padding-box;
  box-shadow: 0px 3px 10px #0000004d;
  display: flex;
  align-items: center;
  padding: 0px 20px;
  //   width: 90%;
  margin-bottom: 20px;
`;

export const Number = styled.h2`
  margin-right: 15px;
  color: #fff;
  opacity: 0.5;
`;
export const P = styled.p`
  color: #fff;
`;

export const Button = styled.div`
  outline: none;
  border: none;
  background: transparent linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;
  width: 150px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  font-weight: 600;
  cursor: pointer;
  font-size: 90%;
`;
