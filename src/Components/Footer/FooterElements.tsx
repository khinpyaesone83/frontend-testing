import styled from "styled-components";

export const Container = styled.section`
  background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
    url("Footer.jpeg");
  width: 100%;
  height: auto;
  background-size: cover;
  // margin-top: 25px;
  //   display: flex;
  //   align-items: center;
  //   flex-direction: column;
  color: #fff;

  @media screen and (max-width: 765px) {
    height: auto;
  }
`;
export const Wrapper = styled.div`
  padding: 20px 100px;
  display: grid;

  grid-template-columns: 1fr 1fr 1fr 1fr;
  @media screen and (max-width: 800px) {
    // grid-template-columns: 1fr;
    display: flex;
    justify-content: center;
    // align-items: center;
    flex-direction: column;
    padding: 20px;
  }
`;
export const InputBoxWrapper = styled.div`
  display: flex;
`;
export const SectionOne = styled.div``;
export const SectionTwo = styled.div``;
export const SectionThree = styled.div``;
export const SectionFour = styled.div``;

export const Title = styled.h2`
  font-weight: 300;
  font-size: 120%;
`;
export const Menu = styled.ul``;
export const MenuItem = styled.li`
  line-height: 30px;
`;

export const BoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Box = styled.div`
  border-top: 1px solid #fff;
  border-bottom: 1px solid #fff;
  height: 80px;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 765px) {
    height: 100px;
    flex-direction: column;
  }
`;
export const C1 = styled.div``;
export const C2 = styled.div`
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Input = styled.input`
  width: 250px;
  height: 30px;
  margin-right: 20px;
  background-color: transparent;
  border: 1px solid #fff;
  outline: none;
  margin-bottom: 5px;
  @media screen and (max-width: 765px) {
    width: 150px;
  }
`;

export const Img = styled.img`
  width: 30%;
  @media screen and (max-width: 765px) {
    width: 50%;
  }
`;

export const SocialWrapper = styled.div`
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`;

export const IconWrapper = styled.div`
  padding: 5px;
  cursor: pointer;
`;
export const TextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  @media screen and (max-width: 765px) {
    flex-direction: column;
  }
`;

export const Text = styled.small`
  padding: 10px;
`;
