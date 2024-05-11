import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const { width: viewportWidth } = Dimensions.get('window');

function MainPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('替换为你的API Url')
    .then(response => response.json())
    .then(data => setWeather(data));
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
        {/* Other cards... */}
      </View>
    </ScrollView>
  );
}

export default MainPage;