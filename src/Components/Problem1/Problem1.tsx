import React, { useState } from "react";
import {
  Button,
  Circle,
  Container,
  Img,
  ImgOne,
  ImgTwo,
  ImgWrapper,
  P,
  PImg,
  PImgFour,
  PImgOne,
  PImgThree,
  PImgTwo,
  TextContainer,
  TextWrapper,
  Title,
  Wrapper,
  WrapperOne,
  WrapperTwo,
} from "./Problem1Elements";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { BiMobileAlt } from "react-icons/bi";

const Problem1 = () => {
  const [change, setChange] = useState<boolean>(false);

  const desktopSvg = "desktop.png";
  const p1Img = "trippro.com.hk_cn_.png";
  const p2Img = "trippro.com.hk_cn_-2.png";
  const phoneImg1 = "trip1.png";
  const phoneImg2 = "trip2.png";
  const phoneImg3 = "trip3.png";
  const phoneImg4 = "trip4.png";
  const phone = "iphone1.png";
  return (
    <>
      <Container>
        <Wrapper>
          <WrapperOne>
            {change ? (
              <>
                <ImgWrapper>
                  <PImg src={phone} alt="desktopsvg" />
                  <PImgOne src={phoneImg1} />
                  <PImgTwo src={phoneImg2} />
                  <PImgThree src={phoneImg3} />
                  {/* <PImgFour src={phoneImg4} /> */}
                </ImgWrapper>
              </>
            ) : (
              <>
                <ImgWrapper>
                  <Img src={desktopSvg} alt="desktopsvg" />
                  <ImgOne src={p1Img} />
                  <ImgTwo src={p2Img} />
                </ImgWrapper>
              </>
            )}
          </WrapperOne>
          <WrapperTwo>
            <TextWrapper>
              <Title>Their Old Website & Problems</Title>
              <TextContainer>
                <AiOutlineArrowRight size={20} color="#fff" />
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  voluptate quod nostrum error sapiente neque eaque tempora
                  placeat explicabo alias.
                </P>
              </TextContainer>
              <TextContainer>
                <AiOutlineArrowRight size={20} color="#fff" />
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  voluptate quod nostrum error sapiente neque eaque tempora
                  placeat explicabo alias.
                </P>
              </TextContainer>
              <TextContainer>
                <AiOutlineArrowRight size={20} color="#fff" />
                <P>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                  voluptate quod nostrum error sapiente neque eaque tempora
                  placeat explicabo alias.
                </P>
              </TextContainer>
              <MdKeyboardArrowLeft size={30} color="#fff" />
              <MdKeyboardArrowRight size={30} color="#fff" />
              {change ? (
                <Button onClick={() => setChange(false)}>
                  <Circle />
                  <BiMobileAlt size={20} color="#fff" />
                  Mobile
                </Button>
              ) : (
                <Button onClick={() => setChange(true)}>
                  Desktop
                  <Circle />
                </Button>
              )}
            </TextWrapper>
          </WrapperTwo>
        </Wrapper>
      </Container>
    </>
  );
};

export default Problem1;
