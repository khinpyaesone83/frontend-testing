import React from "react";
import {
  Btn,
  C1,
  C2,
  C3,
  C4,
  Container,
  Content1,
  Content2,
  LogoImg,
  LogoWrapper,
  Menu,
  MenuItem,
} from "./HeaderElements";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillTelephoneFill, BsWhatsapp } from "react-icons/bs";
import { Dropdown, Select, Space } from "antd";
import type { MenuProps } from "antd";
import { DownOutlined } from "@ant-design/icons";

const Header = () => {
  const Logo = "logo.png";

  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <a target="_blank" rel="noopener noreferrer" href="">
          menu item
        </a>
      ),
    },
  ];
  return (
    <>
      <Container>
        <LogoWrapper>
          <LogoImg src={Logo} />
        </LogoWrapper>
        <Content1>
          <C1></C1>
          <C2>
            <Menu>
              <MenuItem>
                <BsFillTelephoneFill
                  size={20}
                  style={{ marginRight: "5px", color: "dodgerblue" }}
                />
                6248 0838
              </MenuItem>
              <MenuItem>
                <GrMail
                  size={20}
                  style={{ marginRight: "5px", color: "dodgerblue" }}
                />
                6248 0838
              </MenuItem>
              <MenuItem>
                <BsWhatsapp
                  size={20}
                  style={{ marginRight: "5px", color: "dodgerblue" }}
                />
                info@visible.com
              </MenuItem>
              <MenuItem>
                <Btn>
                  <HiOutlineDocumentText size={20} />
                  <span>QUOTE</span>
                </Btn>
              </MenuItem>
              <MenuItem>
                <Select
                  defaultValue={"SG EN"}
                  style={{
                    color: "dodgerblue",
                  }}
                  options={[
                    { value: "MM", label: "MM" },
                    { value: "SG EN", label: "SG EN" },
                  ]}
                />
              </MenuItem>
            </Menu>
          </C2>
        </Content1>
        <Content2>
          <C3></C3>
          <C4>
            <Menu>
              <MenuItem>Home</MenuItem>
              <MenuItem>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Services
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </MenuItem>
              <MenuItem>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Company
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </MenuItem>
              <MenuItem>Blog</MenuItem>
              <MenuItem>
                <Dropdown menu={{ items }}>
                  <a onClick={(e) => e.preventDefault()}>
                    <Space>
                      Contact Us
                      <DownOutlined />
                    </Space>
                  </a>
                </Dropdown>
              </MenuItem>
              <MenuItem>
                <AiOutlineSearch size={20} style={{ marginLeft: "10px;" }} />
              </MenuItem>
            </Menu>
          </C4>
        </Content2>
      </Container>
    </>
  );
};

export default Header;
