import {Text, View} from 'react-native';
import Styles from '../Styles';
import {useState} from 'react';
import {BottomNavigation} from 'react-native-paper';

export interface IHomeProps {}

const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;

const NotificationsRoute = () => <Text>Notifications</Text>;

const Home: React.FC<IHomeProps> = (_props: IHomeProps) => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'music',
      title: 'Favorites',
      focusedIcon: 'heart',
      unfocusedIcon: 'heart-outline',
    },
    {key: 'albums', title: 'Albums', focusedIcon: 'cart'},
    {key: 'recents', title: 'Recents', focusedIcon: 'history'},
    {
      key: 'notifications',
      title: 'Notifications',
      focusedIcon: 'bell',
      unfocusedIcon: 'bell-outline',
    },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <>
      <View style={Styles.Home}>
        <Text>Home Screen</Text>
      </View>
      <BottomNavigation
        navigationState={{index, routes}}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </>
  );
};

export default Home;
