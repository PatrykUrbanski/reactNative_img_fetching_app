import React from 'react';
import {SafeAreaView, Image} from 'react-native';
import {styles} from "./styles/styles";
import {ComicsList} from "./components/comicsList/comicsList";

const App = () => {

  return (
      <SafeAreaView style={styles.mainContainer}>
        <ComicsList />
      </SafeAreaView>
  );
};

export default App
