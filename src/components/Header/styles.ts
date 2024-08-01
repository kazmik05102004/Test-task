import {normalize} from '@utils/fontSizeNormalize';
import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles/Colors';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(20),
    gap: normalize(20),
  },
  title: {
    fontWeight: '500',
    fontSize: TextFontSize.regular,
    paddingLeft: normalize(10),
  },
  subHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: normalize(20),
    paddingBottom: normalize(20),
  },
  leftContent: {
    backgroundColor: COLORS.primaryBlue,
    paddingLeft: normalize(16),
    paddingVertical: normalize(6),
    paddingRight: normalize(112),
    borderTopRightRadius: 16,
    borderBottomRightRadius: 16,
    height: 47,
  },
  topText: {
    fontWeight: '500',
    fontSize: TextFontSize.semimini,
    color: COLORS.textColor,
  },
  bottomText: {
    fontWeight: '400',
    fontSize: TextFontSize.nano,
    color: COLORS.textColor,
  },
});
