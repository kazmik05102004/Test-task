import React, {FC, useEffect, useState} from 'react';
import {View} from 'react-native';
import {NavigationProp, RouteProp} from '@react-navigation/native';
import {SeatType} from '@utils/types';
import {BottomStackParamList} from 'src/navigation/BottomTabNavigation';
import {ScreenWrapper} from '@components/ScreenWrapper/ScreenWrapper';
import {COLORS} from 'src/styles/Colors';
import {Header} from '@components/Header/Header';
import {CustomText} from '@components/CustomText/CustomText';
import {styles} from './styles';
import {RawSeats} from '@components/RawSeats/RawSeats';

const RightComponent = () => (
  <View style={styles.rightComponentContainer}>
    <View style={styles.rightComponentSection}>
      <CustomText text={'Reserved'} style={styles.rightComponentText} />
      <View
        style={[
          styles.rightComponentSquare,
          {
            backgroundColor: COLORS.secondaryBlue,
          },
        ]}
      />
    </View>
    <View style={styles.rightComponentSection}>
      <CustomText text={'Available'} style={styles.rightComponentText} />
      <View
        style={[
          styles.rightComponentSquare,
          {
            backgroundColor: COLORS.textColor,
          },
        ]}
      />
    </View>
  </View>
);

interface ISeatAvailabilityProps {
  route: RouteProp<BottomStackParamList, 'SeatAvailability'>;
  navigation: NavigationProp<BottomStackParamList, 'SeatAvailability'>;
}

export const SeatAvailability: FC<ISeatAvailabilityProps> = ({
  route,
  navigation,
}) => {
  const {busInfo} = route.params;

  const [leftRaw, setLeftRaw] = useState<SeatType[]>([]);
  const [rightRaw, setRightRaw] = useState<SeatType[]>([]);

  useEffect(() => {
    if (busInfo?.seats) {
      const newLeftRaw: SeatType[] = [];
      const newRightRaw: SeatType[] = [];

      busInfo.seats.forEach((seat, index) => {
        if (index % 4 === 0 || index % 4 === 1) {
          newLeftRaw.push(seat);
        } else {
          newRightRaw.push(seat);
        }
      });

      setLeftRaw(newLeftRaw);
      setRightRaw(newRightRaw);
    }
  }, [busInfo?.seats]);

  const selectSeat = () => {
    navigation.navigate('Location', {
      busInfo,
    });
  };

  return (
    <ScreenWrapper>
      <Header
        title={busInfo!.title}
        destination={`${busInfo?.from} - ${busInfo?.to}`}
        pageName={'Seat availability'}
        rightComponent={<RightComponent />}
      />
      <View style={styles.container}>
        <RawSeats rawSeats={leftRaw} selectSeat={selectSeat} />
        <RawSeats rawSeats={rightRaw} selectSeat={selectSeat} />
      </View>
    </ScreenWrapper>
  );
};
