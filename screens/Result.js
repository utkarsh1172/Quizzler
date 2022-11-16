/* eslint-disable prettier/prettier */
import {View, Text, Image, TouchableOpacity} from 'react-native';

const Result = () => {
  return (
    <View>
      <View>
        <Text>Rexult</Text>
      </View>
      <View>
        <Image
          source={{
            uri:'https://i.pinimg.com/736x/6a/7b/d3/6a7bd354f2459e471f72fee63e46e716.jpg'
          }}
        />
      </View>
      <View>
        <TouchableOpacity>
          <Text>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Result;



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