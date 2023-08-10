import React from "react";
import {
  Img,
  ImgWrapper,
  Item,
  ItemContainer,
  LaptopImg,
  LaptopPicture,
  P,
  Title,
  Wrapper,
} from "./HomeElements";
import { motion } from "framer-motion";

const Home = () => {
  const responsiveSvg = "/svg/responsive.svg";
  const wordpress = "/svg/wordpress.svg";
  const shoppingCart = "/svg/shopping-cart.svg";
  const laptopImg = "Laptop.png";
  const laptopPicture = "laptopPicture.png";
  return (
    <Wrapper>
      <Title>TRIPPRO - AN ECOMMERCE SOLUTION</Title>
      <P>
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
        voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
      </P>
      <ItemContainer>
        <Item>
          <b>Build for:</b>
          <Img src={responsiveSvg} />
        </Item>
        <Item>
          <p>
            Technologies:<br></br> <b>Wordpress</b>
          </p>
          <Img src={wordpress} />
        </Item>
        <Item>
          <p>
            Industry:<br></br> <b>Ecommerce</b>
          </p>
          <Img src={shoppingCart} />
        </Item>
      </ItemContainer>
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        // viewport={{ once: true }}
      >
        <ImgWrapper>
          <LaptopImg src={laptopImg} />
          <LaptopPicture src={laptopPicture} />
        </ImgWrapper>
      </motion.div>
    </Wrapper>
  );
};

export default Home;
