import City from '../Screens/City';
import CurrentWeather from '../Screens/CurrentWeather';
import UpcomingWeather from '../Screens/UpcomingWeather';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Icon} from '@rneui/themed';
const BottomTab = createBottomTabNavigator();

export default function Tabs({weather}) {
  return (
    <BottomTab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: '#19262b',
        tabBarInactiveBackgroundColor: '#c1ced4',
        headerStyle: {
          backgroundColor: '#19262b',
        },
        headerTitleStyle: {
          color: 'white',
          textAlign: 'center',
          fontSize: 25,
        },
      }}>
      <BottomTab.Screen
        name="Current Weather"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="droplet"
              type="feather"
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}>
        {() => <CurrentWeather weatherList={weather.list[0]} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="Upcoming Weather"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="clock"
              type="feather"
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}>
        {() => <UpcomingWeather weatherData={weather.list} />}
      </BottomTab.Screen>
      <BottomTab.Screen
        name="City"
        options={{
          tabBarIcon: ({focused}) => (
            <Icon
              name="home"
              type="feather"
              size={25}
              color={focused ? 'tomato' : 'grey'}
            />
          ),
        }}>
        {() => <City CityDetails={weather.city} />}
      </BottomTab.Screen>
    </BottomTab.Navigator>
  );
}
