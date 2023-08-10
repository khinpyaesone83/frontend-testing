import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Card,
  Container,
  Header,
  Img,
  P,
  Title,
  Number,
  WrapperOne,
  WrapperTwo,
  Button,
  CardContainer,
  ContainerTwo,
} from "./ChallengeElements";
import { motion } from "framer-motion";

interface Datatype {
  id: number;
  userId: number;
  title: string;
  body: string;
}

const Challenge = () => {
  const [data, setData] = useState<Datatype[]>();
  const challengeImg = "challenges.png";

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
    );
    setData(response.data);
  };
  return (
    <>
      <Container>
        <WrapperOne>
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Img src={challengeImg} alt="challengeImg" />
          </motion.div>
        </WrapperOne>
        <WrapperTwo>
          <Header>
            <Title>
              OUR <span style={{ color: "#2DC4EA" }}>CHALLENGES</span>
            </Title>
          </Header>
          <CardContainer>
            {data?.map((item) => (
              <Card key={item?.id} color={item?.id.toString()}>
                <Number color={item?.id.toString()}>{item?.id}</Number>
                <P color={item?.id.toString()}>{item?.title}</P>
              </Card>
            ))}
          </CardContainer>
        </WrapperTwo>
      </Container>
      <ContainerTwo>
        <WrapperOne></WrapperOne>
        <WrapperTwo>
          <Button>View More</Button>
        </WrapperTwo>
      </ContainerTwo>
    </>
  );
};

export default Challenge;
