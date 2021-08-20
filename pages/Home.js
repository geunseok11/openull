import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import axios from "axios";
import Header from "../components/Header";
import Nav from "../components/Nav";
// import faker from "faker";
import GoodsInfo from "./GoodsInfo";
import { useDispatch, useSelector } from "react-redux";
import { homeToLoad } from "../reducers/goods";
// import Carousel from "react-native-carousel-view";
import ViewPager from "@react-native-community/viewpager";
import shortId from "shortid";
import { FlatList } from "react-native-gesture-handler";

const Container = styled.SafeAreaView`
  flex: 1;
  padding: 10px;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const TextStyled = styled.Text`
  margin-top: 20px;
`;

const ViewPagerStyled = styled(ViewPager)`
  height: 300px;
`;

const TextPagerStyled = styled.Text`
  height: 200px;
  font-size: 50px;
`;

const ProductTextStyled = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #464e46;
  margin: 20px 10px;
`;

const BestTextStyled = styled.Text`
  font-weight: bold;
  font-size: 25px;
  color: #464e46;
  margin: 40px 10px;
`;

const SplitView = styled.View`
  flex-direction: row;
  flex: 1;
`;

const InSplit = styled.View`
  width: 50%;
`;

const InTextView = styled.View`
  padding-left: 10px;
  margin: 5px 0px;
`;

export const ProductContainer = styled.TouchableOpacity`
  flex: 1;
  margin: 0px 5px;
`;

export const ProductContents = styled.ScrollView`
  flex: 1;
  background-color: white;
  border-radius: 30px;
  margin-bottom: 15px;
`;

export const ProductImageView = styled.Image`
  flex:1
  height: 160px;
  margin-top:10px;
  border-radius:10px;
  resize-mode: contain;
`;

export const ProductTextView = styled.Text`
  color: #222831;
  padding-left: 20px;
  margin-bottom: 5px;
`;

export const OriginTextView = styled.Text`
  color: #222831;
  padding-left: 20px;
  margin-bottom: 5px;
  text-decoration: line-through;
`;

const Home = (props) => {
  const dispatch = useDispatch();
  const home = useSelector((state) => state.goods?.home);
  const products = useSelector((state) => state.goods.home?.products);
  // console.log("products :", products);

  useEffect(() => {
    dispatch(homeToLoad());
  }, []);

  return (
    <Container>
      <Header props={props} />

      <Contents>
        <ProductTextStyled>PRODUCTS LIST</ProductTextStyled>

        <SplitView>
          <InSplit>
            {products &&
              products
                // .slice(products.length / 2)
                .reverse()
                .map((el) => {
                  // console.log("el :", el);
                  return (
                    <ProductContainer
                      key={shortId.generate()}
                      onPress={() => {
                        props.navigation.push("GoodsInfo", {
                          prefix: el.prefix,
                        });
                      }}
                    >
                      <ProductContents key={shortId.generate()}>
                        <ProductImageView
                          source={{ uri: el.mainImage }}
                        ></ProductImageView>
                        <InTextView>
                          <ProductTextView>{el.name}</ProductTextView>
                          <OriginTextView>
                            {el.originalPrice.toLocaleString()}원
                          </OriginTextView>
                          <ProductTextView>
                            {el.ssomeePrice.toLocaleString()}원
                          </ProductTextView>
                        </InTextView>
                      </ProductContents>
                    </ProductContainer>
                  );
                })}
          </InSplit>
          <InSplit>
            {products &&
              products
                // .slice(0, products.length / 2)
                .reverse()
                .map((el) => {
                  // console.log("el :", el);
                  return (
                    <ProductContainer
                      key={shortId.generate()}
                      onPress={() => {
                        props.navigation.push("GoodsInfo", {
                          prefix: el.prefix,
                        });
                      }}
                    >
                      <ProductContents key={shortId.generate()}>
                        <ProductImageView
                          source={{ uri: el.mainImage }}
                        ></ProductImageView>
                        <InTextView>
                          <ProductTextView>{el.name}</ProductTextView>
                          <OriginTextView>
                            {el.originalPrice.toLocaleString()}원
                          </OriginTextView>
                          <ProductTextView>
                            {el.ssomeePrice.toLocaleString()}원
                          </ProductTextView>
                        </InTextView>
                      </ProductContents>
                    </ProductContainer>
                  );
                })}
          </InSplit>
        </SplitView>
      </Contents>

      <Nav props={props} />
    </Container>
  );
};

export default Home;
