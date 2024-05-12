import React, { Component } from "react";
import { Animated, Dimensions, PanResponder } from "react-native";
import { Surface, Text } from 'react-native-paper';

const { width } = Dimensions.get("window");
const restaurants = ["KFC", "MacDonalds", "Burger King", "Pizza Hut", "Taco Bell", "Subway", "Starbucks", "Domino's"];
const SIZE = width;
const ANGLE = 360 / restaurants.length;
const ANGLES_MAP = restaurants.map((item, index) => index * ANGLE);

export default class Roulette extends Component {
  constructor(props) {
    super(props);
    this.pan = new Animated.Value(0);

    this.panResponder = PanResponder.create({
      onPanResponderMove: Animated.event([null, {dy: this.pan}], { useNativeDriver: false }),
      onPanResponderRelease: () => {
        Animated.decay(this.pan, { velocity: 0.18, useNativeDriver: false }).start();
      }
    });
  }

  getInterpolate = (rotate, i) => {
    const inputRange = ANGLES_MAP;
    let outputRange = ANGLES_MAP.map((a) => a + i * ANGLE);
    return rotate.interpolate({inputRange, outputRange});
  }
  
  render() {
    const rotate = this.pan.interpolate({inputRange: [-360, 0, 360], outputRange: ['360deg', '0deg', '360deg']});
    return (
      <Surface style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        {restaurants.map((item, index) => {
          const angle = this.getInterpolate(rotate, index);
          return(
            <Animated.View
              {...this.panResponder.panHandlers}
              key={index}
              style={{
                transform: [{rotate: angle}],
                position: 'absolute'
              }}
            >
              <Text>{item}</Text>
            </Animated.View>
          );
        })}
      </Surface>
    );
  }
}