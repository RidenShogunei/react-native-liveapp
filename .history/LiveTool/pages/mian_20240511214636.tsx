import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Dimensions } from 'react-native';
import { Card } from 'react-native-paper';

const { width: viewportWidth } = Dimensions.get('window');

function MainPage() {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetch('http://api.openweathermap.org/data/2.5/weather?q=City Name&appid= Your APi Key')
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
        <Card style={{ width: viewportWidth }}>
          {weather && (
            <Card.Content>
              <Text>{`Temperature: ${weather.main.temp}`}</Text>
              <Text>{`Weather: ${weather.weather[0].main}`}</Text>
              <Text>{`Wind Speed: ${weather.wind.speed}`}</Text>
            </Card.Content>
          )}
        </Card>
      </ScrollView>

      <View>
        {/* Other cards... */}
      </View>
    </ScrollView>
  );
}

export default MainPage;