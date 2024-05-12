import AsyncStorage from "@react-native-async-storage/async-storage";

export const storeData = async () => {
    try {
        const restaurants = [
            'KFC',
            'MacDonalds',
            'Burger King',
            'takexing',
            'Taco Bell',
            'Subway',
            'Starbucks',
            "Domino's",
        ];
        await AsyncStorage.setItem('restaurants', JSON.stringify(restaurants)); 
    } catch (error) {
        // Error saving data
        console.log(error);
    }
};

export const retrieveData = async () => {
    try {
        const value = await AsyncStorage.getItem('restaurants');
        if (value !== null) {
            // Our data is fetched successfully
            return JSON.parse(value);
        }
        return null;
    } catch (error) {
        // Error retrieving data
        console.log(error);
        return null;
    }
};

export const addRestaurant = async (newRestaurant: string) => {
    try {
        // 获取当前的餐厅列表
        const currentData = await AsyncStorage.getItem('restaurants');
        let restaurants: string[] = currentData ? JSON.parse(currentData) : [];
        
        // 添加新的餐厅
        restaurants.push(newRestaurant);

        // 存储更新后的餐厅列表
        await AsyncStorage.setItem('restaurants', JSON.stringify(restaurants));
    } catch (error) {
        console.log(error);
    }
};