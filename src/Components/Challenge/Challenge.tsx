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
import { Element, Link } from "react-scroll";

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
          <Img src={challengeImg} alt="challengeImg" />
        </WrapperOne>
        <WrapperTwo>
          <Header>
            <Title>
              OUR <span style={{ color: "#2DC4EA" }}>CHALLENGES</span>
            </Title>
          </Header>
          <CardContainer>
            {data?.map((item) => (
              <Card>
                <Number>{item?.id}</Number>
                <P>{item?.title}</P>
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
