import {normalize} from '@utils/fontSizeNormalize';
import {StyleSheet} from 'react-native';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  rawContainer: {
    width: 120,
    flexDirection: 'row',
    flexWrap: 'wrap',
    rowGap: 14,
    columnGap: 20,
  },
  seat: {
    width: 48,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: normalize(8),
  },
  seatText: {fontSize: TextFontSize.semimini, fontWeight: '400'},
});
