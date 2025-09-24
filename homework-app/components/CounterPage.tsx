import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { increment, decrement, incrementByAmount, reset, updateName } from '../store/counterSlice';
import { useState, useEffect } from 'react';
import CustomButton from './CustomButton';

interface CounterPageProps {
  onNavigate: () => void;
}

export default function CounterPage({ onNavigate }: CounterPageProps) {
  const { value: counter, name } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch<AppDispatch>();
  const [inputValue, setInputValue] = useState('');
  const [pageVisits, setPageVisits] = useState(0);

  useEffect(() => {
    // Track page visits using useEffect
    setPageVisits(prev => prev + 1);
    console.log(`Counter page visited ${pageVisits + 1} times`);
  }, []);

  const handleIncrementByAmount = () => {
    const amount = parseInt(inputValue) || 0;
    dispatch(incrementByAmount(amount));
    setInputValue('');
  };

  const handleNameUpdate = () => {
    if (inputValue.trim()) {
      dispatch(updateName(inputValue.trim()));
      setInputValue('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.subtitle}>Page Visits: {pageVisits}</Text>
      
      <View style={styles.counterSection}>
        <Text style={styles.counterText}>Counter: {counter}</Text>
      </View>

      <View style={styles.buttonGroup}>
        <CustomButton 
          title="Increment (+1)" 
          onPress={() => dispatch(increment())}
        />
        
        <CustomButton 
          title="Decrement (-1)" 
          onPress={() => dispatch(decrement())}
          variant="secondary"
        />
        
        <CustomButton 
          title="Reset" 
          onPress={() => dispatch(reset())}
          variant="secondary"
        />
      </View>

      <View style={styles.inputSection}>
        <TextInput
          style={styles.input}
          placeholder="Enter amount or new name"
          value={inputValue}
          onChangeText={setInputValue}
          keyboardType="numeric"
        />
        
        <CustomButton 
          title="Add Amount" 
          onPress={handleIncrementByAmount}
        />
        
        <CustomButton 
          title="Update Name" 
          onPress={handleNameUpdate}
          variant="secondary"
        />
      </View>

      <TouchableOpacity style={styles.backButton} onPress={onNavigate}>
        <Text style={styles.backButtonText}>← Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 30,
    color: '#666',
  },
  counterSection: {
    backgroundColor: '#f0f0f0',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
    minWidth: 200,
    alignItems: 'center',
  },
  counterText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonGroup: {
    marginBottom: 30,
    width: '100%',
    alignItems: 'center',
  },
  inputSection: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: '80%',
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: '#34C759',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
