import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";
import { connect, useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Container = styled.SafeAreaView`
  flex: 1;
`;

const Contents = styled.ScrollView`
  flex: 1;
`;

const RowView = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: auto;
  margin: 30px 0px;
`;

// ime-mode:active;
const StyledTextInput = styled.TextInput`
  justify-content: center;
  align-items: center;
  width: 70%;
  margin-bottom: 20px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  margin-bottom: 20px;
`;

const styles = StyleSheet.create({
  border: {
    borderStyle: "solid",
    margin: 10,
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "grey",
  },
});

const Search = (props) => {
  const dispatch = useDispatch();
  const [value, onChangeText] = useState("");
  const [search, onSearch] = useState([]);
  const searchList = useSelector((state) => state.goods?.home);
  console.log("In Search, searchList, : ", searchList);

  // const errorMessage = useSelector((state) => state.goods?.loadSearchListError);
  // console.log("In Search, errorMessage : ", errorMessage);

  useEffect(() => {
    if (searchList && searchList.length > 0) {
      searchList = [];
    }
  }, [searchList]);

  const onChangeTextSearch = useCallback(
    (text) => {
      onChangeText(text);
      dispatch(loadSearchList(value));
    },
    [value]
  );

  // useEffect(() => {
  //   if (searchList.name === value) {
  //   }
  // }, []);

  // const onPressSearch = useCallback(() => {
  //   // console.log('In Search, onPressSearch, value : ', value)
  //   dispatch(loadSearchList(value));
  // }, [value])

  return (
    <Container>
      <Header props={props} />

      <RowView style={styles.border}>
        <StyledTextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          onChangeText={(text) => onChangeText(text)}
          value={value}
        />

        <StyledTouchableOpacity onPress={onChangeTextSearch}>
          {/* <Icon name="ios-book-outline" size={30} color={"black"} /> */}
          <Text>SEARCH</Text>
        </StyledTouchableOpacity>
      </RowView>

      <Contents>
        {searchList &&
          searchList.map((el) => {
            // el.name === value;
            return (
              <SearchList key={el.products.prefix} prop={props} data={el} />
            );
          })}
      </Contents>

      <Nav props={props} />
    </Container>
  );
};

export default Search;
