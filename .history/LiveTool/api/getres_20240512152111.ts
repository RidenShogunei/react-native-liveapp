import { AsyncStorage } from 'react-native';

// 存储数据
storeData = async () => {
  try {
    const restaurants = [
      'KFC',
      'MacDonalds',
      'Burger King',
      'Pizza Hut',
      'Taco Bell',
      'Subway',
      'Starbucks',
      "Domino's",
    ];
    await AsyncStorage.setItem('restaurants', JSON.stringify(restaurants)); 
  } catch (error) {
    // Error saving data
    console.error(error);
  }
}

// 获取数据
retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('restaurants');
    if (value !== null) {
      // Our data is fetched successfully
      console.log(JSON.parse(value));
    }
  } catch (error) {
    // Error retrieving data
    console.error(error);
  }
};