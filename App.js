import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from "./styles/styles";
import {ComicsList} from "./components/comicsList/comicsList";

const App = () => {

  return (
      <SafeAreaView style={styles.container}>
        <ComicsList />
      </SafeAreaView>
  );
};

export default App
