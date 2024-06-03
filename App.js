import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import Headers from './components/Headers';

export default function App() {

  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ]);

  return (
    <View style={styles.container}>
      <Headers/>
      <View style={styles.content}>
        {/* to form */}
        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => {
              return (
                <Text>{item.text}</Text>
              )
            }}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
   
  },  
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
});
