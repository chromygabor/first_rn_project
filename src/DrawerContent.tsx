import {Text, View} from 'react-native';
import Styles from './Styles';

export interface IDrawerContentProps {}

const DrawerContent: React.FC<IDrawerContentProps> = (
  _props: IDrawerContentProps,
) => {
  return (
    <View style={Styles.DrawerContent}>
      <Text>Drawer content</Text>
    </View>
  );
};

export default DrawerContent;
