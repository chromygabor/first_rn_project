import {Text, View} from 'react-native';

export interface IMainProps {}

const Main: React.FC<IMainProps> = (_props: IMainProps) => {
  return (
    <View>
      <Text>MainComponent</Text>
    </View>
  );
};

export default Main;
