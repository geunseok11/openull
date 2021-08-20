import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import styled from "styled-components";
import Header from "../components/Header";
import Nav from "../components/Nav";

const Bucket = (props) => {
  return (
    <Container>
      <Header props={props} />

      <Contents></Contents>

      <Nav props={props} />
    </Container>
  );
};

export default Bucket;
