import styled from "styled-components";

export const Container = styled.div``;
export const Content1 = styled.div`
  background: #00000029;
  padding: 0px 50px;
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
export const Content2 = styled.div`
  height: 40px;
  padding: 0px 50px;
  display: flex;
  justify-content: space-between;
`;

export const C1 = styled.div``;
export const C2 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const C3 = styled.div``;
export const C4 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const MenuItem = styled.li`
  margin: 0px 10px;
  cursor: pointer;
  display: flex;
  font-weight: 400;
  font-size: 90%;

  &:hover {
    color: dodgerblue;
  }
`;

export const Btn = styled.div`
  background: #389e0d;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 80%;
  padding: 5px;
  color: #fff;
  border-radius: 3px;
`;

export const LogoWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  //   top: 10px;
  //   height: 0px;
  left: 80px;
  display: flex;
  justify-content: center;
  //   border-left: 2px solid red;
  //   border-right: 2px solid blue;
  padding: 20px 15px;
`;

export const LogoImg = styled.img`
  width: 120px;
`;
