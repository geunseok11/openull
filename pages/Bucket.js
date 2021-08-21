import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";
import shortId from "shortid";
import { saleAction } from "../reducers/sale";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const BottomView = styled.View`
  height: 70px;
  padding: 20px;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
`;

const BottomAggregate = styled.View`
  justify-content: center;
`;

const BottomAggregateText = styled.Text`
  margin-bottom: 5px;
`;

const BottomPayment = styled.View`
  justify-content:center;
  align-items:center;
  border: 2px solid grey;
  border-radius:10px;
  flex:0.4
  height:100%
`;

const Bucket = (props) => {
  const dispatch = useDispatch();
  const bucket = useSelector((state) => state.goods?.bucket);
  console.log("In Bucket, bucket : ", bucket);
  const data = props.route.params;

  useEffect(() => {
    dispatch(saleAction(prefix));
  }, []);

  const onPressSale = useCallback(() => {
    dispatch(saleAction(prefix));
  }, []);

  return (
    <Container>
      <Header props={props} />

      <Contents>
        {bucket &&
          bucket.map((el) => {
            return (
              <BucketList key={shortid.generate()} data={el} props={props} />
            );
          })}
      </Contents>

      <BottomView>
        <BottomAggregate>
          <BottomAggregateText>
            합계 수량 : {bucket.reduce((acc, cur) => acc.count + cur.count)}
          </BottomAggregateText>
          <Text>
            합계 금액 :{" "}
            {bucket
              .reduce((acc, cur) => acc.ssomeePrice + cur.ssomeePrice)
              .toLocaleString()}
          </Text>
        </BottomAggregate>

        <BottomPayment>
          <TouchableOpacity onPress={onPressSale}>
            <Text>구매하기</Text>
          </TouchableOpacity>
        </BottomPayment>
      </BottomView>

      <Nav props={props} />
    </Container>
  );
};

export default Bucket;
