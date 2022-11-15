import {View, Text,Image, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import Title from '../components/Title';
const Home = () => {
  return (
    <View>
      <Title />
      <View style={styles.bannerContainer}>
        <Image
          source={{
            uri: 'https://i.pinimg.com/474x/e6/d2/d8/e6d2d80f6c2dbc745f5461945e8e341c.jpg',
          }}
          style={StyleSheet.banner}
          resizeMode="contain"
        />
      </View>
      <TouchableOpacity>
        <Text>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    heigh:300,
    width: 300,
    
  },
   bannerContainer:{
    justifyContent: 'center',
    alignItems:'center',
   }  
}
)
