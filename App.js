import React from 'react';
import { Provider } from 'react-redux';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import TodoApp from './screens/TodoApp';

import store from './redux/store';



const App = () => {

  return (
    <View style={styles.container}>
    <Provider store={store}>
      <TodoApp/>
    </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1
    // marginHorizontal: 15,
    // marginVertical: 15,
  }
});

export default App;
