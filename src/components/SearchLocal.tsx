import { View, Text, TextInput } from 'react-native'
import React from 'react'

const SearchLocal = () => {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [results, setResults] = React.useState<string[]>([]);

    const localData = [
        'Apple',
        'Banana',
        'Cherry',
        'Date',
        'Elderberry',
        'Fig',
        'Grape',
        'Honeydew',
    ];

    
  return (
    <View>
      <Text>SearchLocal</Text>
      <TextInput
        placeholder="Search..."
        value={searchQuery}
        
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
          paddingHorizontal: 10,
        }}
      />
      {results.map((result, index) => (
        <Text key={index}>{result}</Text>
      ))}
    </View>
  )
}

export default SearchLocal