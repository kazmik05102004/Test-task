import {Pressable, View} from 'react-native';
import React, {FC} from 'react';
import {CustomText} from '@components/CustomText/CustomText';
import {COLORS} from 'src/styles/Colors';
import {SeatType} from '@utils/types';
import {styles} from './styles';

interface IProps {
  rawSeats: SeatType[];
  selectSeat: () => void;
}

export const RawSeats: FC<IProps> = ({rawSeats, selectSeat}) => {
  return (
    <View style={styles.rawContainer}>
      {rawSeats.map(item => {
        return (
          <Pressable
            onPress={selectSeat}
            disabled={!item.isAvailable}
            key={item.id}
            style={[
              styles.seat,
              {
                backgroundColor: item.isAvailable
                  ? COLORS.textColor
                  : COLORS.secondaryBlue,
              },
            ]}>
            <CustomText text={item.number.toString()} style={styles.seatText} />
          </Pressable>
        );
      })}
    </View>
  );
};
