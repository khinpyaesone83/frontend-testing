import styled from "styled-components";

export const Wrapper = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.41), rgba(0, 0, 0, 0.41)),
    url("15740.png");
  //   background-image: url("15740.png");
  width: 100%;
  height: 500px;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: #fff;

  @media screen and (max-width: 765px) {
    height: 800px;
  }
`;

export const Title = styled.h1`
  margin-top: 60px;
  font-size: 250%;
  font-weight: 400;
  text-align: center;
`;
export const P = styled.p`
  width: 70%;
  font-size: 100%;
  text-align: center;
`;

export const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;
export const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;

export const Img = styled.img`
  margin-left: 5px;
`;

export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  position: relative;
`;
export const LaptopImg = styled.img`
  width: 60%;
`;

export const LaptopPicture = styled.img`
  width: 45%;
  position: absolute;
`;
