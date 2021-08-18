import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home";
import GoodsList from "../pages/GoodsList";
import GoodsInfo from "../pages/GoodsInfo";
import Bucket from "../pages/Bucket";
import Search from "../pages/Search";
import Category from "../pages/Category";

const Stack = createStackNavigator();

const HomeNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="GoodsList" component={GoodsList} />
      <Stack.Screen name="GoodsInfo" component={GoodsInfo} />
      <Stack.Screen name="Bucket" component={Bucket} />
      <Stack.Screen name="Search" component={Search} />
      <Stack.Screen name="Category" component={Category} />
    </Stack.Navigator>
  );
};

export default HomeNavigator;
