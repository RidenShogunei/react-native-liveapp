import {View, Text, ScrollView, Dimensions} from 'react-native';
import {Button, Card} from 'react-native-paper';
import Carousel from 'react-native-snap-carousel'; // 导入轮播图库

const {width: viewportWidth} = Dimensions.get('window'); // 获取设备宽度

function MainPage() {
  // 轮播图的数据，如果是网络图片，请确保图片地址是正确的
  const carouselItems = [
    {source: {uri: 'https://picsum.photos/700'}},
    {source: {uri: 'https://picsum.photos/700'}}
    // 添加更多的图片...
  ];

  const _renderItem = ({item, index}) => {
    return (
      <Card style={{margin: 10}}>
        <Card.Cover source={item.source} />
      </Card>
    );
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={{height: '50%'}}>
        <Carousel
          layout={'default'}
          ref={(ref) => (this.carousel = ref)}
          data={carouselItems}
          sliderWidth={viewportWidth}
          itemWidth={viewportWidth - 60}
          renderItem={_renderItem}
          onSnapToItem={(index) => this.setState({activeIndex: index})}
        />
      </View>
      <View style={{height: '50%'}}>
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