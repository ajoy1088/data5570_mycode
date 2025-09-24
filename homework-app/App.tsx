import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './store';
import HomePage from './components/HomePage';
import CounterPage from './components/CounterPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={() => setCurrentPage('counter')} />;
      case 'counter':
        return <CounterPage onNavigate={() => setCurrentPage('home')} />;
      default:
        return <HomePage onNavigate={() => setCurrentPage('counter')} />;
    }
  };

  return (
    <Provider store={store}>
      <View style={styles.container}>
        {renderPage()}
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});