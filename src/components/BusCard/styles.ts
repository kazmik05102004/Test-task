import {normalize} from '@utils/fontSizeNormalize';
import {StyleSheet} from 'react-native';
import {COLORS} from 'src/styles/Colors';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.secondaryWhite,
    borderRadius: normalize(20),
    shadowColor: COLORS.primaryBlack,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.4,
    shadowRadius: normalize(20),
    elevation: 5,
    height: 340,
    overflow: 'hidden',
  },
  topCard: {
    backgroundColor: COLORS.primaryBlue,
    borderTopRightRadius: normalize(20),
    borderTopLeftRadius: normalize(20),
    paddingTop: normalize(25),
    paddingBottom: normalize(8),
    gap: normalize(2),
  },
  title: {
    textAlign: 'center',
    color: COLORS.textColor,
    fontWeight: '500',
    fontSize: TextFontSize.regular,
  },
  destination: {
    textAlign: 'center',
    color: COLORS.textColor,
    fontWeight: '400',
    fontSize: TextFontSize.micro,
  },
  imageContainer: {position: 'relative'},
  image: {
    position: 'absolute',
    top: 20,
    left: 20,
    width: 500,
    height: 290,
    overflow: 'visible',
  },
});
