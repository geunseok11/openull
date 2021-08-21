import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

const NavView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 0px;
  align-items: center;
  border-radius: 50px;
  background-color: #f5efef;
`;
const NavIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
`;

const NavText = styled.Text`
  font-weight: bold;
  font-size: 15px;
  color: #464e46;
`;

const NavCenterText = styled.Text`
  font-weight: bold;
  width: 70px;
  font-size: 20px;
  color: #464e46;
`;

const HeaderIcon = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  width: 55px;
  width: 50px;
  height: 50px;
`;

const HeaderIconText = styled.Text`
  color: #464e46;
  font-weight: bold;
`;

const Nav = ({ props }) => {
  const data = useSelector((state) => state.login?.data);

  return (
    <NavView>
      <NavIcon
        onPress={() => {
          props.navigation.goBack();
        }}
      >
        <NavText>BACK</NavText>
      </NavIcon>

      <NavIcon>
        <NavCenterText>
          <HeaderIcon
            onPress={() => {
              props.navigation.push("Search");
            }}
          >
            <HeaderIconText>SEARCH</HeaderIconText>
          </HeaderIcon>
        </NavCenterText>
      </NavIcon>
      <NavIcon
        onPress={() => {
          props.navigation.push("Category");
        }}
      >
        <NavText>CATEGORY</NavText>
      </NavIcon>
    </NavView>
  );
};

export default Nav;
