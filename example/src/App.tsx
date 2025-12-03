import { View, StyleSheet, Button } from 'react-native';
import { finishActivity, startActivity } from 'react-native-android-activity';

export default function App() {
  const startActivityHandler = () => {
    // Example usage: Start an activity with requestCode 1, className 'com.example.MyActivity', packageName 'com.example'
    startActivity(
      1,
      'androidactivity.example.SecondActivity',
      'androidactivity.example' // Optional package name for same app activity
    )
      .then((result) => {
        console.log('Activity started:', result);
      })
      .catch((error) => {
        console.error('Error starting activity:', error);
      });
  };

  const finishActivityHandler = () => {
    finishActivity(1);
  };

  return (
    <View style={styles.container}>
      <Button onPress={startActivityHandler} title="Start Activity" />
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
