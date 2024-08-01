import {CustomText} from '@components/CustomText/CustomText';
import {NavigationProp} from '@react-navigation/native';
import React, {FC} from 'react';
import {Image, Pressable, View} from 'react-native';
import {RootStackParamList} from 'src/navigation/AppNavigation';
import {RouteDataType} from 'src/utils/types';
import {styles} from './styles';

interface IProps {
  busInfo: RouteDataType;
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}

export const BusCard: FC<IProps> = ({busInfo, navigation}) => {
  const selectRoute = () => {
    navigation.navigate('BottomTab', {
      busInfo,
    });
  };

  return (
    <Pressable onPress={selectRoute} style={styles.container}>
      <View style={styles.topCard}>
        <CustomText text={busInfo.title} style={styles.title} />
        <CustomText
          text={`${busInfo.from} - ${busInfo.to}`}
          style={styles.destination}
        />
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: busInfo.busImg,
          }}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};
