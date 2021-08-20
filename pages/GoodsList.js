import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import { useDispatch, useSelector } from "react-redux";
import { loadGoodsList } from "../reducers/goods";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const InContainer = styled.TouchableOpacity`
  flex:1;
  height: 500px;
  margin-top:30px;  
  margin-bottom: 30px;
  
  border-bottom-width:1px
  border-color:grey;
  border-radius:30px
`;

const Contents = styled.View`
  flex:1
  border-radius: 30px;
  justify-content: center;
  align-items:center;
  
`;

const ImageView = styled.Image`
  flex: 1;
  height: 400px;
  width: 450px;
  background-color: white;
  resize-mode: contain;
  border-radius: 10px;
`;

const TextView1 = styled.Text`
  font-size: 20px;
  color: #464e46;
`;

const TextView2 = styled.Text`
  font-size: 20px;
  color: #464e46;
`;

const InContents = styled.ScrollView`
  flex: 1;
`;

const ViewStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

// const FontAwesomeIconStyled = styled(FontAwesomeIcon)`
//   color:#464e46
//   opacity:1
//   flex:1
// `;

const TouchableOpacityStyled = styled.TouchableOpacity`
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
`;

const BottomView = styled.View`
  justify-content: center;
  margin-left: 40px;
`;

const GoodsList = (props) => {
  // console.log("In GOODSLIST, props : ", props);
  const dispatch = useDispatch();
  var goodsList = useSelector((state) => state.goods?.goodsList);
  var detail = useSelector((state) => state.goods.goodsList?.detailImage);
  // console.log("In GoodsList, goodsList : ", goodsList);
  console.log("In GoodsList, detailImage : ", detail);

  const name = goodsList?.name;
  const prefix = goodsList?.prefix;
  const img = goodsList?.mainImage;
  const price = goodsList?.ssomeePrice;

  const data = {
    count: 1,
    prefix: prefix,
    name: name,
    img: img,
    price: price,
  };

  const filterValue = props.route.params?.filter;

  useEffect(() => {
    if (goodsList && goodsList.length > 0) {
      goodsList = [];
    }
  }, [goodsList]);

  useEffect(() => {
    dispatch(loadGoodsList(filterValue));
  }, []);

  return (
    <Container>
      <Header props={props} />

      <InContents>
        {goodsList &&
          goodsList.reverse().map((el) => {
            return (
              <InContainer
                key={el.prefix}
                onPress={() => {
                  props.navigation.push("GoodsInfo", { prefix: el.prefix });
                }}
              >
                <Contents>
                  <ImageView source={{ uri: el.mainImage }} />

                  <ViewStyled>
                    <BottomView>
                      <TextView1>{el.name}</TextView1>
                      <TextView2>{el.ssomeePrice.toLocaleString()}원</TextView2>
                    </BottomView>

                    <View>
                      <TouchableOpacityStyled
                        onPress={() => {
                          props.navigation.push("Bucket", {
                            count: 1,
                            prefix: el.prefix,
                            name: el.name,
                            price: el.ssomeePrice,
                            img: el.mainImage,
                          });
                        }}
                      >
                        {/* <FontAwesomeIconStyled
                          icon={faSuitcaseRolling}
                          size={30}
                        /> */}
                      </TouchableOpacityStyled>
                    </View>
                  </ViewStyled>
                </Contents>
              </InContainer>
            );
          })}
      </InContents>

      <Nav props={props} />
    </Container>
  );
};

export default GoodsList;
