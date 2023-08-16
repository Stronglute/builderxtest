import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import MaterialButtonGrey from "../components/MaterialButtonGrey";
import MaterialSearchBarWithBackground from "../components/MaterialSearchBarWithBackground";

function Untitled2(props) {
  return (
    <Container>
      <Rect>
        <IconRow>
          <EntypoIcon
            name="home"
            style={{
              color: "rgba(128,128,128,1)",
              fontSize: 40,
              height: 43,
              width: 40,
              marginTop: 6
            }}
          ></EntypoIcon>
          <NbaHoldingAlco>NBA Holding &amp; Alco</NbaHoldingAlco>
          <MaterialButtonGrey
            style={{
              height: 36,
              width: 100,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 161,
              marginTop: 15
            }}
          ></MaterialButtonGrey>
          <MaterialButtonGrey
            style={{
              height: 36,
              width: 100,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 23,
              marginTop: 15
            }}
          ></MaterialButtonGrey>
          <MaterialButtonGrey
            style={{
              height: 36,
              width: 100,
              backgroundColor: "rgba(15,15, 15,0)",
              marginLeft: 20,
              marginTop: 15
            }}
          ></MaterialButtonGrey>
          <MaterialSearchBarWithBackground
            style={{
              height: 56,
              width: 375,
              marginLeft: 19
            }}
          ></MaterialSearchBarWithBackground>
        </IconRow>
      </Rect>
      <ScrollAreaStack>
        <ScrollArea></ScrollArea>
        <Image src={require("../assets/images/ampule1.jpg")}></Image>
      </ScrollAreaStack>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-width: 0px;
  border-color: rgba(225,222,222,1);
  border-style: solid;
`;

const Rect = styled.div`
  width: 1366px;
  height: 118px;
  background-color: rgba(73,73,126,1);
  flex-direction: row;
  display: flex;
  margin-top: -4px;
`;

const NbaHoldingAlco = styled.span`
  font-family: Roboto;
  font-style: italic;
  font-weight: ;
  color: #121212;
  letter-spacing: 10px;
  line-height: 15px;
  font-size: 14px;
  margin-left: 54px;
  margin-top: 25px;
`;

const IconRow = styled.div`
  height: 56px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 20px;
  margin-left: 53px;
  margin-top: 34px;
`;

const ScrollArea = styled.div`
  overflow-y: scroll;
  top: 0px;
  left: 0px;
  width: 1366px;
  height: 654px;
  position: absolute;
  background-color: rgba(230, 230, 230,1);
  display: flex;
`;

const Image = styled.img`
  top: 0px;
  left: 0px;
  width: 1188px;
  height: 1042px;
  position: absolute;
  object-fit: contain;
`;

const ScrollAreaStack = styled.div`
  width: 1366px;
  height: 1042px;
  position: relative;
`;

export default Untitled2;
