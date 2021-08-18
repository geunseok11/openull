import React, { useState, useCallback } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components/native";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const ViewStyled = styled.View`
  margin-top: 20px;
  flex:1;
  height: 150px;
  flex-direction:row;
  border-bottom-width: 1px;
  border-style : solid
  border-color:grey;
  border-radius: 30px;
  justify-content : space-around;
  align-items:center;
`;

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex: 0.5;
  width: 12px;
  height: 120px;
  border-radius: 10px;
`;

const TextViewStyled = styled.View`
  margin-bottom: 20px;
  align-items: flex-start;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  margin-bottom: 5px;
`;

const BucketList = ({ props }) => {
  console.log("In BucketList, all the props : ", props);

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          return props.props.navigation.push("GoodsInfo", { id: id });
        }}
      >
        <ViewStyled>
          <ImageOfUpperLeft source={{ uri: img }} />

          <TextViewStyled>
            <TextStyled>이름 : {name}</TextStyled>
            <TextStyled>수량 : {count}</TextStyled>
            <TextStyled>가격 : {priceMultiple.toLocaleString()}</TextStyled>
          </TextViewStyled>
        </ViewStyled>
      </TouchableOpacity>
    </Container>
  );
};

export default BucketList;
