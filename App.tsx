import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

const App = () => {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<number | null>(null);

  const add = (numbers: string): number => {
    if (!numbers.trim()) return 0;

    const customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
    let delimiter = /,|\n/; 
    let numString = numbers;

    if (customDelimiterMatch) {
      delimiter = new RegExp(customDelimiterMatch[1]);
      numString = numbers.split('\n').slice(1).join('\n'); 
    }

    const nums = numString
      .split(delimiter)
      .map((num) => num.trim())
      .map(Number);

    const negatives = nums.filter((num) => num < 0);
    if (negatives.length) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }

    return nums.reduce((sum, num) => sum + (num || 0), 0); // Ignore empty strings and NaN
  };

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum);
    } catch (error: any) {
      Alert.alert('Error', error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>String Calculator</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter numbers (e.g., 1,2,3)"
        value={input}
        onChangeText={setInput}
        multiline
      />
      <Button title="Calculate" onPress={handleCalculate} />
      {result !== null && <Text style={styles.result}>Result: {result}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 100,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 20,
    textAlignVertical: 'top',
  },
  result: {
    fontSize: 20,
    marginTop: 20,
  },
});

export default App;
