import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useSelector, useDispatch } from "react-redux";
import { loadGoodsInfo, addToBucket } from "../reducers/goods";
import GoodsInfoUpper from "../components/GoodsInfoUpper";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const ViewNavRowStyled = styled.View`
  width: 100%;
`;
const ButtonNavStyled = styled.Button`
  background-color: black;
`;

const GoodsInfo = (props) => {
  const dispatch = useDispatch();

  const prefix = props.route.params;
  const goodsInfo = useSelector((state) => state.goods?.goodsInfo);
  console.log("In GOODS_DETAIL, goodsInfo : ", goodsInfo);

  const brand = goodsInfo.brand?.name;
  const name = goodsInfo?.name;
  const img = goodsInfo?.mainImage;
  const originalPrice = goodsInfo?.originalPrice;
  const ssomeePrice = goodsInfo?.ssomeePrice;
  const detailImages = goodsInfo?.detailImages;
  const shop = goodsInfo.shop?.name;
  const orderLimit = goodsInfo?.orderLimit;
  // const count = useSelector((state) => state.goods?.count);
  console.log("In GOODS_DETAIL, detailImages : ", detailImages);
  const data = {
    // count: count,
    prefix: prefix.prefix,
    brand: brand,
    name: name,
    img: img,
    originalPrice: originalPrice,
    ssomeePrice: ssomeePrice,
    detailImages: detailImages,
    shop: shop,
    orderLimit: orderLimit,
  };

  useEffect(() => {
    // TODO: In here, qna states are re-rendering? Or, In render part, qna states are re-rendering? TEST!

    dispatch(loadGoodsInfo(prefix));
  }, []);

  return (
    <Container>
      <Header props={props} />

      <Contents>
        <GoodsInfoUpper
          uri={img}
          prefix={prefix}
          brand={brand}
          name={name}
          originalPrice={originalPrice}
          ssomeePrice={ssomeePrice}
          detailImages={detailImages}
          shop={shop}
          orderLimit={orderLimit}
          onPress2={() => {
            props.navigation.push("Bucket");
          }}
        />
      </Contents>

      <Nav props={props} />
    </Container>
  );
};

export default GoodsInfo;
