import React from "react";
import {
  Button,
  Container,
  Dash,
  Dash1,
  Dash2,
  Img,
  Line,
  P,
  Title,
  WrapperOne,
  WrapperTwo,
} from "./AboutElements";

const About = () => {
  const tabletImg = "Tablet.png";
  return (
    <Container>
      <WrapperOne>
        <Title>
          ABOUT <span style={{ color: "#2DC4EA" }}>TRIPPRO</span>
        </Title>
        <Line />
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Exercitationem numquam accusamus labore natus. Ipsam possimus
          molestiae hic minus itaque expedita corporis ad omnis facilis, rerum
          nostrum atque deserunt mollitia quos!
        </P>
        <Button>TOUR TO WEBSITE</Button>
      </WrapperOne>
      <WrapperTwo>
        <Img src={tabletImg} alt="tabletImg" />
        <Dash></Dash>
        <Dash1></Dash1>
        <Dash2></Dash2>
      </WrapperTwo>
    </Container>
  );
};

export default About;
