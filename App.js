import React, { useState } from 'react'
import { StatusBar } from 'expo-status-bar'
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import Headers from './components/Headers'
import TodoItem from './components/TodoItem'
import AddTodo from './components/AddTodo'
import Sandbox from './components/Sandbox'

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' },
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key)
    })
  }

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((todos) => {
        return [{ text: text, key: Math.random().toString() }, ...todos]
      })
    } else {
      Alert.alert('OOPS!', 'Todos must be over 3 chars long', [
        { text: 'Sawa Mkuu!', onPress: () => console.log('alert closed') },
      ])
    }
  }

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss()
        // console.log('Dismissed keyboard')
      }}
    >
      <View style={styles.container}>
        <Headers />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => {
                return <TodoItem item={item} pressHandler={pressHandler} />
              }}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  },
})
