import { finishCurrentActivity } from '@pawan-pk/react-native-android-activity';
import { Text, View, StyleSheet, Button } from 'react-native';

export default function SecondApp() {
  const finishActivityHandler = () => {
    finishCurrentActivity();
  };

  return (
    <View style={styles.container}>
      <Text>Second Activity</Text>
      <Button onPress={finishActivityHandler} title="Finish Activity" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
