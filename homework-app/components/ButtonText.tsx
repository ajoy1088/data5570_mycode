import { Text, StyleSheet } from 'react-native';

interface ButtonTextProps {
  text: string;
}

export default function ButtonText({ text }: ButtonTextProps) {
  return (
    <Text style={styles.text}>
      {text}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});