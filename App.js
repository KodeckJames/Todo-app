import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { TextInput, StyleSheet, Text, View } from 'react-native';

export default function App() {

  const [name, setName] = useState('James')
  const [age, setAge] = useState('30')

  

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        style={styles.input}
        placeholder='name'
        onChangeText={(val)=>setName(val)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType='numeric'
        style={styles.input}
        placeholder='age'
        onChangeText={(val)=>setAge(val)}
      />
      <Text>name:{name} age:{ age}</Text>
      <StatusBar style="auto" />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },  
  input: {
    borderWidth: 1,
    borderColor: '#777',
    padding: 8,
    margin: 10,
    width: 200,
  }
});
