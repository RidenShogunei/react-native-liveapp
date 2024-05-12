import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card } from 'react-native-paper';

const RestaurantPicker = () => {
  const [selectedRestaurant, setSelectedRestaurant] = useState("Press the button...");
  const restaurants = ["KFC", "MacDonalds", "Burger King", "Pizza Hut", "Taco Bell", "Subway", "Starbucks", "Domino's"];

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
        <Card.Title  />
        <Card.Content>
          <Text style={styles.text}>{selectedRestaurant}</Text>
        </Card.Content>
      </Card>
      <Button mode="contained" onPress={selectRestaurant} style={styles.button}>
        Pick a restaurant
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