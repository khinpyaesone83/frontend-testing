import React from "react";
import {
  Box,
  BoxWrapper,
  C1,
  C2,
  Container,
  InputWrapper,
  Menu,
  MenuItem,
  SectionFour,
  SectionOne,
  SectionThree,
  SectionTwo,
  Title,
  Wrapper,
  Input,
} from "./FooterElements";
import { AiFillMail } from "react-icons/ai";
import { Button } from "antd";

const Footer = () => {
  return (
    <>
      <Container>
        <Wrapper>
          <SectionOne>
            <Title>QUICK LINKS</Title>
            <Menu>
              <MenuItem>Services</MenuItem>
              <MenuItem>About Us</MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>Quotation</MenuItem>
              <MenuItem>Partnership</MenuItem>
              <MenuItem>Contact Us</MenuItem>
            </Menu>
          </SectionOne>
          <SectionTwo>
            <Title>OUR SERVICES</Title>
            <Menu>
              <MenuItem>Web Development</MenuItem>
              <MenuItem>Web Design</MenuItem>
              <MenuItem>Responsive Web Design</MenuItem>
              <MenuItem>CMS Web Design</MenuItem>
              <MenuItem>Custom Website Design</MenuItem>
              <MenuItem>UI/UX Website Design</MenuItem>
              <MenuItem>360 Virtual Tour</MenuItem>
            </Menu>
          </SectionTwo>
          <SectionThree>
            <Title></Title>
            <div style={{ paddingTop: "20px" }}></div>
            <Menu>
              <MenuItem>Ecommerce Design</MenuItem>
              <MenuItem>Woocommerce Design</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Services</MenuItem>
              <MenuItem>Services</MenuItem>
            </Menu>
          </SectionThree>
          <SectionFour>
            <Title>VISIBLE ONE SINGAPORE</Title>
            <Menu>
              <h4>+65 6248 0838</h4>

              <div>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <AiFillMail
                    size={20}
                    color="#fff"
                    style={{ marginRight: "10px" }}
                  />
                  <div>info@visibleone.com</div>
                </div>
              </div>
              <div style={{ margin: "10px 0px" }}>
                24 Sin Ming Lane, Midview City #07-93, Singapore 573970
              </div>
              <div>Office Hour: Mon-Fri(9am-6pm)</div>
              <div
                style={{
                  margin: "20px 0px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "ce",
                }}
              >
                <Button type="primary" style={{ marginRight: "20px" }}>
                  Contact Us
                </Button>
                <p
                  style={{ color: "dodgerblue", padding: "0px", margin: "0px" }}
                >
                  Contact HK Office
                </p>
              </div>
            </Menu>
          </SectionFour>
        </Wrapper>
        <BoxWrapper>
          <Box>
            <C1></C1>
            <C2>
              <small>Subscribe to our news,tips and guidlines</small>
              <InputWrapper>
                <Input placeholder="123@test.com" />
                <Button type="primary">Submit</Button>
              </InputWrapper>
            </C2>
          </Box>
        </BoxWrapper>
      </Container>
    </>
  );
};

export default Footer;
