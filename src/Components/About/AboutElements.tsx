import styled from "styled-components";

export const Container = styled.div`
  margin: 60px;
  padding-top: 300px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 765px) {
    flex-direction: column;
    padding-top: 60px;
  }
`;

export const WrapperOne = styled.div`
  width: 50%;
  @media screen and (max-width: 765px) {
    width: 100%;
  }
`;
export const WrapperTwo = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  @media screen and (max-width: 765px) {
    padding-top: 120px;
  }
`;

export const Title = styled.h1`
  font-size: 150%;
`;

export const Line = styled.div`
  background: #2dc4ea;
  height: 3px;
  width: 152px;
`;

export const P = styled.p`
  width: 80%;
  margin-bottom: 30px;

  @media screen and (max-width: 765px) {
    width: 95%;
  }
`;

export const Img = styled.img`
  position: absolute;
  width: 110%;
  z-index: 10;
  @media screen and (max-width: 765px) {
    width: 55%;
  }
`;
export const Dash = styled.div`
  width: 400px;
  height: 400px;
  position: absolute;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%25' ry='100%25' stroke='%23EC3463' stroke-width='5' stroke-dasharray='238%2c115' stroke-dashoffset='172' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 50%;
  @media screen and (max-width: 765px) {
    width: 250px;
    height: 250px;
  }
`;

export const Dash1 = styled.div`
  width: 350px;
  height: 350px;
  position: absolute;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%25' ry='100%25' stroke='%23EC3463' stroke-width='5' stroke-dasharray='238%2c115' stroke-dashoffset='172' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 50%;
  @media screen and (max-width: 765px) {
    width: 200px;
    height: 200px;
  }
`;

export const Dash2 = styled.div`
  width: 250px;
  height: 250px;
  background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100%25' ry='100%25' stroke='%23EC3463' stroke-width='5' stroke-dasharray='238%2c115' stroke-dashoffset='172' stroke-linecap='butt'/%3e%3c/svg%3e");
  border-radius: 50%;
  @media screen and (max-width: 765px) {
    width: 140px;
    height: 140px;
  }
`;

export const Button = styled.div`
  outline: none;
  border: none;
  background: transparent linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;
  width: 200px;
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
