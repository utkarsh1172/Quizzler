import {View, Text} from 'react-native';
import Home from './screens/Home';
import Quiz from './screens/Quiz';
import Result from './screens/Result'

const App = () => {
  return (
    <View>
      <Home/>
      <Quiz/>
      <Result/>
    </View>
  );
};
export default App;
