import { View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
  const [todos, setTodos] = useState<string[]>([])
  const [input, setInput] = useState('')
  const [editingIndex, setEditingIndex] = useState<number | null>(null)

  const submitTodo = () => {
    if (!input.trim()) return

    if (editingIndex !== null) {
      // Editing existing todo
      setTodos(prev =>
        prev.map((todo, index) =>
          index === editingIndex ? input : todo
        )
      )
      setEditingIndex(null)
    } else {
      // Adding new todo
      setTodos(prev => [...prev, input])
    }

    setInput('')
  }

  const removeTodo = (index: number) => {
    setTodos(prev => prev.filter((_, i) => i !== index))
  }

  const startEditing = (index: number) => {
    setInput(todos[index])
    setEditingIndex(index)
  }

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, marginBottom: 10 }}>Todo</Text>

      <TextInput
        value={input}
        onChangeText={setInput}
        placeholder="Enter todo"
        onSubmitEditing={submitTodo}
        style={{
          borderWidth: 1,
          padding: 10,
          borderRadius: 5,
          marginBottom: 10
        }}
      />

      {todos.map((todo, index) => (
        <View
          key={index}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginBottom: 8
          }}
        >
          <Text style={{ flex: 1 }}>{todo}</Text>

          <TouchableOpacity
            onPress={() => startEditing(index)}
            style={{
              backgroundColor: 'blue',
              padding: 6,
              borderRadius: 5,
              marginRight: 5
            }}
          >
            <Text style={{ color: 'white' }}>Edit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => removeTodo(index)}
            style={{
              backgroundColor: 'red',
              padding: 6,
              borderRadius: 5
            }}
          >
            <Text style={{ color: 'white' }}>Delete</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  )
}

export default Todo