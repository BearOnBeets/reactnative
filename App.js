import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Dumb from '../reacttest/components/Dumb';
import Smart from '../reacttest/components/Smart';

export default function App() {
  return (
    <View style={styles.container}>
      <Dumb/>
      <Smart/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
