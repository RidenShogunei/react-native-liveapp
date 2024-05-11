import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Card, Button } from 'react-native-paper';

const { width: viewportWidth } = Dimensions.get('window');

function MainPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('https://devapi.qweather.com/v7/weather/now?location=101010100&key=acfa15e64b854efcb254f98a8b29568e')
      .then(response => {
        console.log('Response status:', response.status);
        return response.json();
      })
      .then(data => {
        console.log('Weather data:', data);
        setWeather(data);
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
      >
        {weather && (
          <Card style={{ width: viewportWidth }}>
            <Card.Content>
              <Text>{`Temperature: ${weather.now.temp}`}</Text>
              <Text>{`Feels Like: ${weather.now.feelsLike}`}</Text>
              <Text>{`Weather: ${weather.now.text}`}</Text>
              <Text>{`Wind Direction: ${weather.now.windDir}`}</Text>
              <Text>{`Wind Scale: ${weather.now.windScale}`}</Text>
            </Card.Content>
          </Card>
        )}
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