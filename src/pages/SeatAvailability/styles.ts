import {normalize} from '@utils/fontSizeNormalize';
import {StyleSheet} from 'react-native';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  container: {
    paddingTop: normalize(60),
    paddingHorizontal: normalize(36),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightComponentContainer: {gap: 5},
  rightComponentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  rightComponentSquare: {height: 24, width: 24, borderRadius: 5},
  rightComponentText: {fontWeight: '300', fontSize: TextFontSize.nano},
});
