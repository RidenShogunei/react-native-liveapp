import {View, Text, ScrollView, Dimensions, Image} from 'react-native';
import {Button, Card} from 'react-native-paper';

const {width: viewportWidth} = Dimensions.get('window');

function MainPage() {
  const carouselItems = [
    {source: {uri: 'https://picsum.photos/700'}},
    {source: {uri: 'https://picsum.photos/700'}}
  ];

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center'}}
      >
        {carouselItems.map((item, index) => (
          <Card key={index} style={{width: viewportWidth}}>
            <Card.Cover source={item.source} />
          </Card>
        ))}
      </ScrollView>
      <View>
        <Card style={{margin: 10}}>
          <Card.Content>
            <Text>Card content</Text>
            <Button mode="contained" onPress={() => console.log('Button pressed')}>
              Press me
            </Button>
          </Card.Content>
        </Card>
        <Card style={{margin: 10}}>
          <Card.Content>
            <Text>More card content</Text>
            <Button mode="contained" onPress={() => console.log('Another button pressed')}>
              Press me too
            </Button>
          </Card.Content>
        </Card>
        {/* 更多的 Card... */}
      </View>
    </ScrollView>
  );
}

export default MainPage;