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
import { motion } from "framer-motion";

const About = () => {
  const tabletImg = "Tablet.png";

  return (
    <Container>
      <WrapperOne>
        <motion.div
          initial={{ x: "-100%", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
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
        </motion.div>
      </WrapperOne>

      <motion.div
        initial={{ x: "100%", opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <WrapperTwo>
          <Img src={tabletImg} alt="tabletImg" />
          <Dash></Dash>
          <Dash1></Dash1>
          <Dash2></Dash2>
        </WrapperTwo>
      </motion.div>
    </Container>
  );
};

export default About;
