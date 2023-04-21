import {Text, View} from 'react-native';
import Styles from '../Styles';

export interface IHomeProps {}

const Home: React.FC<IHomeProps> = (_props: IHomeProps) => {
  return (
    <View style={Styles.Home}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default Home;
