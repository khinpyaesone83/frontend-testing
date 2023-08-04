import styled from "styled-components";

export const Container = styled.div`
  margin-bottom: 0px;
  padding-top: 60px;
`;

export const Wrapper = styled.div`
  display: grid;
  position: relative;
  padding: 0;
  margin: 0px;
  background: transparent linear-gradient(113deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;
  grid-template-columns: 1fr 2fr;
  @media screen and (max-width: 800px) {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;

export const WrapperOne = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const WrapperTwo = styled.div`
  // background: transparent linear-gradient(113deg, #3ae7ab 0%, #2dc4ea 100%) 0%
  //   0% no-repeat padding-box;
  height: 100%;
  @media screen and (max-width: 800px) {
    padding: 12px 0px;
  }
`;
export const Title = styled.h1`
  font-size: 150%;
  color: #fff;
`;

export const ImgWrapper = styled.div`
  background-color: #fff;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

export const Img = styled.img`
  width: 170%;
  z-index: 5;
  padding-left: 400px;
  position: relative;
  // top: 0px;
  // position: absolute;
  // left: 70px;

  @media screen and (max-width: 800px) {
    position: relative;
    width: 100%;
    padding-left: 0px;
  }
`;

export const ImgOne = styled.img`
  width: 100%;
  top: 20px;
  z-index: 6;
  left: 200px;
  position: absolute;
  @media screen and (max-width: 800px) {
    width: 55%;
    left: 70px;
  }
`;

export const ImgTwo = styled.img`
  width: 130%;
  top: 15px;
  z-index: 1;
  left: -350px;
  position: absolute;
  @media screen and (max-width: 800px) {
    width: 63%;
    left: -100px;
  }
`;

export const TextWrapper = styled.div`
  padding-left: 250px;
  @media screen and (max-width: 800px) {
    padding-left: 40px;
  }
`;

export const TextContainer = styled.div`
  display: flex;
  width: 90%;
  margin: 30px 0px;
`;
export const P = styled.p`
  color: #fff;
  font-size: 80%;
  padding: 0;
  margin: 0;
  margin-left: 5px;
`;

export const Button = styled.div`
  margin-top: 10px;
  outline: none;
  border: none;
  background: transparent linear-gradient(270deg, #3ae7ab 0%, #2dc4ea 100%) 0%
    0% no-repeat padding-box;
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  font-weight: bold;
  cursor: pointer;
  font-size: 90%;
`;

export const Circle = styled.div`
  width: 20px;
  height: 20px;
  background: #fff;
  border-radius: 10px;
  margin: 0px 10px;
`;

export const PImg = styled.img`
  width: 55%;
  z-index: 5;
  padding-left: 400px;
  position: relative;
  @media screen and (max-width: 800px) {
    position: relative;
    width: 40%;
    padding-left: 0px;
  }
`;
export const PImgOne = styled.img`
  width: 43%;
  z-index: 6;
  top: 68px;
  left: 320px;
  position: absolute;
  @media screen and (max-width: 800px) {
    width: 30%;
    top: 40px;
    left: 120px;
  }
`;
export const PImgTwo = styled.img`
  width: 43%;
  z-index: 6;
  top: 68px;

  position: absolute;
  @media screen and (max-width: 800px) {
    width: 30%;
    left: -3px;
  }
`;
export const PImgThree = styled.img`
  width: 43%;
  z-index: 6;
  top: 68px;
  left: -100px;
  position: absolute;
  @media screen and (max-width: 800px) {
    width: 30%;
    // left: 120px;
  }
`;
export const PImgFour = styled.img``;
