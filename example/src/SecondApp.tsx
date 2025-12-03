import { Text, View, StyleSheet } from 'react-native';

export default function SecondApp() {
  return (
    <View style={styles.container}>
      <Text>Second Activity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
