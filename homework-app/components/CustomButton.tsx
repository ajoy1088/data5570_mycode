import { TouchableOpacity, StyleSheet } from 'react-native';
import ButtonText from './ButtonText';

interface CustomButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary';
}

export default function CustomButton({ title, onPress, variant = 'primary' }: CustomButtonProps) {
  return (
    <TouchableOpacity 
      style={[styles.button, variant === 'secondary' && styles.secondaryButton]} 
      onPress={onPress}
    >
      <ButtonText text={title} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 8,
    marginVertical: 5,
    minWidth: 150,
    alignItems: 'center',
  },
  secondaryButton: {
    backgroundColor: '#FF3B30',
  },
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});