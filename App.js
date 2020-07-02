import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from "./styles/styles";
import {ComicsList} from "./components/comicsList/comicsList";
import {Header} from "./components/header/header";

const App = () => {

  return (
      <SafeAreaView style={styles.mainContainer}>
          <Header />
          <ComicsList />
      </SafeAreaView>
  );
};

export default App
