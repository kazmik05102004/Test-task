import {normalize} from '@utils/fontSizeNormalize';
import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles/Colors';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: COLORS.primaryWhite},
  flatList: {
    flex: 1,
    paddingBottom: normalize(24),
    paddingHorizontal: normalize(52),
  },
  flatListHeader: {
    fontWeight: 500,
    fontSize: TextFontSize.regular,
    textAlign: 'center',
    paddingBottom: normalize(40),
  },
  itemSeparator: {height: normalize(26)},
});
