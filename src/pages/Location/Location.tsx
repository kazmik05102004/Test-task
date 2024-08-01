import Speedometer from '@assets/icons/speedometer.svg';
import {CustomText} from '@components/CustomText/CustomText';
import {Header} from '@components/Header/Header';
import {ScreenWrapper} from '@components/ScreenWrapper/ScreenWrapper';
import Geolocation from '@react-native-community/geolocation';
import {RouteProp} from '@react-navigation/native';
import {isAndroidDevice} from '@utils/isAndroidDevice';
import React, {FC, useEffect, useState} from 'react';
import {Alert, PermissionsAndroid, View} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {PERMISSIONS, request} from 'react-native-permissions';
import {BottomStackParamList} from 'src/navigation/BottomTabNavigation';
import {styles} from './styles';

interface IRightComponent {
  speed: string;
}

const RightComponent: FC<IRightComponent> = ({speed}) => (
  <View style={styles.rightComponentContainer}>
    <Speedometer height={29} />
    <CustomText text={speed} style={styles.rightComponentText} />
  </View>
);

interface ILocationProps {
  route: RouteProp<BottomStackParamList, 'Location'>;
}

export const Location: React.FC<ILocationProps> = ({route}) => {
  const {busInfo} = route.params || {};
  const [location, setLocation] = useState<{
    latitude: number;
    longitude: number;
  } | null>(null);

  const checkPermission = async () => {
    try {
      const permissionType = PERMISSIONS.IOS.LOCATION_ALWAYS;

      const locationPermissionRequest = await request(permissionType);
      if (locationPermissionRequest === 'granted') {
        getCurrentLocation();
      } else {
        Alert.alert('Permission not granted');
      }
    } catch (err) {
      if (err instanceof Error) {
        Alert.alert('Error', err.message);
      } else {
        Alert.alert('Error', 'An unknown error occurred.');
      }
    }
  };

  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        {
          title: 'Location Permission',
          message: 'This app needs access to your location.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the location');
        getCurrentLocation();
      } else {
        console.log('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const {latitude, longitude} = position.coords;
        console.log(latitude, longitude);
        setLocation({latitude, longitude});
      },
      error => {
        console.error('Error getting location:', error);
        Alert.alert('Unable to get location.');
      },
      {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
    );
  };

  useEffect(() => {
    if (isAndroidDevice) requestLocationPermission();
    else checkPermission();
  }, []);

  return (
    <ScreenWrapper>
      <Header
        title={busInfo!.title}
        destination={`${busInfo?.from} - ${busInfo?.to}`}
        pageName={'Location'}
        rightComponent={<RightComponent speed={busInfo!.speed} />}
      />
      {location && (
        <MapView
          style={styles.container}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}>
          <Marker coordinate={location} title="Your Location" />
        </MapView>
      )}
    </ScreenWrapper>
  );
};
