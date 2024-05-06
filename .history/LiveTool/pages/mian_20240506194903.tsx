import {View, Text} from 'react-native';
import { Button } from 'react-native-paper';
function MainPage() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button mode="contained" onPress={() => console.log('Button pressed')}>
    Press me
</Button>
        <Text>This is the main page</Text>
      </View>
    );
  }
export default MainPage  