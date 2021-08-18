import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

const HeaderView = styled.View`
  height: 50px;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 0px;
  align-items: center;
  background-color: #f5efef;
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

const HeaderCenterText = styled.Text`
  color: #464e46;
  letter-spacing: 5px;
  font-size: 23px;
  font-family: Consola;
`;

const SearchIcon = styled.TextInput`
  width: 150px;
  height: 50px;
  border: 3px solid blue;
`;

const Header = ({ props }) => {
  return (
    <HeaderView>
      <HeaderIcon
        onPress={() => {
          props.navigation.push("Home");
        }}
      >
        {/* <FontAwesomeIcon icon={faHome} color={'#464e46'} size={25} /> */}
        <HeaderIconText>HOME</HeaderIconText>
      </HeaderIcon>

      <HeaderCenterText>OPENULL</HeaderCenterText>

      <HeaderIcon
        onPress={() => {
          props.navigation.push("Bucket");
        }}
      >
        {/* <FontAwesomeIcon icon={faSignInAlt} color={'#464e46'} size={25} /> */}
        <HeaderIconText>BUCKET</HeaderIconText>
      </HeaderIcon>
    </HeaderView>
  );
};

export default Header;
