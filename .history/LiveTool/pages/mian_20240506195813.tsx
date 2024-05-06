import {View, Text, ImageBackground, ScrollView} from 'react-native';
import {Button, Card} from 'react-native-paper';

function MainPage() {
  return (
    <ImageBackground source={require('./assets/background.jpg')} style={{flex: 1}}>
      <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
        {/* 这里是轮播图部分，你需要自行实现或引入一个轮播图库 */}
        <View style={{height: '50%'}}>
          <Card style={{margin: 10}}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          <Card style={{margin: 10}}>
            <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
          </Card>
          {/* 更多的 Card。。。 */}
        </View>
        {/* 这里是下部的滚动区域，包含许多卡片 */}
        <View style={{height: '50%'}}>
          <Card style={{margin: 10}}>
            <Card.Content>
              <Text>Card content</Text>
            </Card.Content>
            <Button mode="contained" onPress={() => console.log('Button pressed')}>
              Press me
            </Button>
          </Card>
          <Card style={{margin: 10}}>
            <Card.Content>
              <Text>More card content</Text>
            </Card.Content>
            <Button mode="contained" onPress={() => console.log('Another button pressed')}>
              Press me too
            </Button>
          </Card>
          {/* 更多的 Card。。。 */}
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

export default MainPage;