import Bus from '@assets/icons/bus.svg';
import InfoIcon from '@assets/icons/info.svg';
import MapMarker from '@assets/icons/map_marker.svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {RouteProp} from '@react-navigation/native';
import {normalize} from '@utils/fontSizeNormalize';
import {isAndroidDevice} from '@utils/isAndroidDevice';
import {RouteDataType} from '@utils/types';
import React, {FC} from 'react';
import {Info} from 'src/pages/Info/Info';
import {Location} from 'src/pages/Location/Location';
import {SeatAvailability} from 'src/pages/SeatAvailability/SeatAvailability';
import {COLORS} from 'src/styles/Colors';
import {RootStackParamList} from './AppNavigation';

export type BottomStackParamList = {
  SeatAvailability: {busInfo?: RouteDataType};
  Location: {busInfo?: RouteDataType};
  Info: undefined;
};

interface IBottomTab {
  route: RouteProp<RootStackParamList, 'BottomTab'>;
}

const Tab = createBottomTabNavigator<BottomStackParamList>();

export const BottomTabNavigator: FC<IBottomTab> = ({
  route: navigationRoute,
}) => {
  const {busInfo} = navigationRoute.params || {};

  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: () => {
          const icons = {
            SeatAvailability: <Bus />,
            Location: <MapMarker />,
            Info: <InfoIcon />,
          };
          return icons[route.name] || null;
        },
        tabBarShowLabel: false,
        tabBarStyle: {
          paddingVertical: isAndroidDevice ? 0 : normalize(24),
          height: isAndroidDevice ? 70 : 'auto',
          backgroundColor: isAndroidDevice
            ? COLORS.textColor
            : COLORS.thirdyWhite,
        },
        headerShown: false,
      })}>
      <Tab.Screen
        name="SeatAvailability"
        component={SeatAvailability}
        initialParams={{busInfo}}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        initialParams={{busInfo}}
      />
      <Tab.Screen name="Info" component={Info} />
    </Tab.Navigator>
  );
};
