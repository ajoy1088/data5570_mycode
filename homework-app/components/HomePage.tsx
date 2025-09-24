import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useEffect, useState } from 'react';
import CustomButton from './CustomButton';

interface HomePageProps {
  onNavigate: () => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  const counter = useSelector((state: RootState) => state.counter.value);
  const [localCount, setLocalCount] = useState(0);

  useEffect(() => {
    // This effect runs when the component mounts
    console.log('HomePage mounted, counter value:', counter);
  }, []);

  const handleLocalIncrement = () => {
    setLocalCount(localCount + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to the Homework App!</Text>
      
      <View style={styles.infoSection}>
        <Text style={styles.subtitle}>Global Counter (from Redux): {counter}</Text>
        <Text style={styles.subtitle}>Local Counter (useState): {localCount}</Text>
      </View>

      <CustomButton 
        title="Increment Local Counter" 
        onPress={handleLocalIncrement}
      />

      <TouchableOpacity style={styles.linkButton} onPress={onNavigate}>
        <Text style={styles.linkText}>Go to Counter Page</Text>
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
    marginBottom: 30,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    textAlign: 'center',
  },
  infoSection: {
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    width: '100%',
  },
  linkButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
    marginTop: 20,
  },
  linkText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
