import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from "./styles/styles";
import {ComicsList} from "./components/comicsList/comicsList";
import {Header} from "./components/header/header";
import {createStackNavigator} from "react-navigation-stack";
import {ComicsDetails} from "./components/comicsDetails/comicsDetails";
import {createAppContainer} from "react-navigation";
import Navigator from "./components/routes/stack"


const App = () => {

  return (
        <Navigator/>
  );
};



export default App
