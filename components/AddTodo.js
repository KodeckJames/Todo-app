import { StyleSheet, Text, View, Button, TextInput } from 'react-native'
import React, {useState} from 'react'

export default function AddTodo({submitHandler}) {

    const [text, setText] = useState('')

  return (
    <View>
          <TextInput
              style={styles.input}
              placeholder='new Todo...'
              onChangeText={val => setText(val)}
          />
          <Button onPress={()=> submitHandler(text) } title='Add Todo' color='purple'/>
    </View>
  )
}

const styles = StyleSheet.create({
    input: {
        marginBottom: 10,
        paddingHorizontal: 8,
        paddingVertical: 6,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',

    }
})