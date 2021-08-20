import React from "react";
import { StyleSheet, View } from "react-native";
// import Icon from "react-native-vector-icons/Ionicons";
import styled from "styled-components";
import shortId from "shortid";

const DetailInfoOfUpper = styled.View`
  flex: 1;
`;
const LeftDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 100%;
  height: 450px;
`;
const ImageOfUpperLeft = styled.Image`
  flex: 1;
  width: 100%;
  height: 100%;
  resize-mode: contain;
`;
const RightDetailInfoOfUpper = styled.View`
  flex: 1;
  width: 100%;
  height: 300px;
  flex-direction: row;
  margin-top: 50px;
`;
const ViewMiddleStyled = styled.View`
  flex-direction: row;
  justify-content: space-around;
  flex: 1;
`;
const TextOfUpperRight = styled.Text`
  font-family: "DancingScript-Regular";

  font-size: 16px;
  margin-top: 23px;
`;

const TextLine = styled.Text`
  text-decoration: line-through;
`;

const ViewRowStyled = styled.View`
  flex-direction: row;
  text-align: center;
  margin: 23px 0px;
  justify-content: center;
  align-items: center;
`;
const QuantityOfText = styled.Text`
  margin-right: 10px;
`;

const TouchableStyled = styled.TouchableOpacity`
  border: 1px solid grey;
`;
const TouchableText = styled.Text`
  margin: 0px 10px;
  text-align: center;
  flex-direction: row;
  justify-content: center;
`;
const ViewNavRowStyled = styled.View`
  width: 100%;
`;
const ButtonNavStyled = styled.Button`
  background-color: black;
`;

const GoodsInfoUpper = (props) => {
  console.log("goodsInfoUpper :", props);
  return (
    <DetailInfoOfUpper>
      <LeftDetailInfoOfUpper>
        <ImageOfUpperLeft source={{ uri: props.uri }} />
      </LeftDetailInfoOfUpper>

      <RightDetailInfoOfUpper>
        <ViewMiddleStyled style={styles.border}>
          <View>
            <TextOfUpperRight>이름 : {props.name}</TextOfUpperRight>
            <TextOfUpperRight>
              가격 : <TextLine>{props.originalPrice}원</TextLine>
            </TextOfUpperRight>
            <TextOfUpperRight>할인가 : {props.ssomeePrice}원</TextOfUpperRight>

            <TextOfUpperRight>
              주문가능 수량 {props.orderLimit}
            </TextOfUpperRight>

            <TouchableStyled onPress={props.onPress}>
              {/* <Icon name="ios-arrow-down-outline" color={"black"} size={30} /> */}
            </TouchableStyled>

            <TouchableStyled onPress={props.onPress1}>
              {/* <Icon name="ios-arrow-up-outline" color={"black"} size={30} /> */}
            </TouchableStyled>

            <ViewNavRowStyled>
              <ButtonNavStyled
                title={"담기"}
                color="#464e46"
                onPress={props.onPress2}
              />
            </ViewNavRowStyled>
          </View>
        </ViewMiddleStyled>
      </RightDetailInfoOfUpper>
      <LeftDetailInfoOfUpper>
        {props.detailImages &&
          props.detailImages.map((el) => {
            return (
              <ImageOfUpperLeft
                key={shortId.generate()}
                source={{ uri: el.image }}
              />
            );
          })}
      </LeftDetailInfoOfUpper>
    </DetailInfoOfUpper>
  );
};

export default GoodsInfoUpper;

const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
  engine: {
    position: "absolute",
    right: 0,
  },
});
