import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button, Card} from 'react-native-paper';
import {retrieveData } from '../api/getres';
const RestaurantPicker = ({ navigation }) => {
  const [selectedRestaurant, setSelectedRestaurant] = useState(
    'Press the button...',
  );
  const restaurants = retrieveData();
  console.log('get res')

  const selectRestaurant = () => {
    let index = 0;
    const intervalId = setInterval(() => {
      setSelectedRestaurant(restaurants[index]);
      index = index === restaurants.length - 1 ? 0 : index + 1;
    }, 100);

    setTimeout(() => clearInterval(intervalId), 2000); // after 2 seconds, the name will stop changing
  };

  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Card.Content>
          <Text style={{fontSize: 22, textAlign: 'center',color:'black'}}>
            随机餐馆选择器
          </Text>
          <Text style={styles.text}>{selectedRestaurant}</Text>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={selectRestaurant} style={styles.button}>
        Pick a restaurant
      </Button>
      <Button mode="contained"  onPress={() => navigation.navigate('Main')} style={styles.button}>
        Go back
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    marginVertical: 20,
  },
  card: {
    marginBottom: 20,
  },
  button: {
    marginTop: 20,
  },
});

export default RestaurantPicker;