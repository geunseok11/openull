import "react-native-gesture-handler";
import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import HomeNavigator from "./navigator/HomeNavigator";

const Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fbf5f5",
  },
};

const App: () => React$Node = () => {
  return (
    <Provider store={configureStore}>
      <StatusBar style="auto" />

      <NavigationContainer theme={Theme}>
        <HomeNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
