import React, { useCallback } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components";

const ViewStyled = styled.TouchableOpacity`
  flex: 1;
  height: 100px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 20px;
  border-bottom-width: 1px;
  border-style: solid;
  border-color: grey;
  border-radius: 20px;
`;

const ImageOfUpperLeft = styled.Image`
  resize-mode: contain;
  flex: 1;
  width: 100px;
`;

const ImageViewStyled = styled.View`
  margin-left: 30px;
  margin-bottom: 13px;
`;

const TextViewStyled = styled.View`
  margin-top: 20px;
  padding-right: 30px;
  align-items: flex-end;
`;

const TextStyled = styled.Text`
  font-size: 15px;
  margin-bottom: 3px;
`;

const SearchList = (props) => {
  console.log("In SearchList, props : ", props);
  const img = props.data.products.mainImage;
  const name = props.data.products.name;
  const price = props.data.products.ssomeePrice;
  const prefix = props.data.products.prefix;

  const onPressToGoodsDetail = useCallback(() => {
    props.prop.navigation.push("GoodsInfo", { prefix: prefix });
  }, []);

  return (
    <ViewStyled onPress={onPressToGoodsDetail}>
      <ImageViewStyled>
        <ImageOfUpperLeft source={{ uri: img }} />
      </ImageViewStyled>

      <TextViewStyled>
        <TextStyled>{name}</TextStyled>
        <TextStyled>{price.toLocaleString()}원</TextStyled>
      </TextViewStyled>
    </ViewStyled>
  );
};

export default SearchList;
