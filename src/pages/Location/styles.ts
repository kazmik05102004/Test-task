import {StyleSheet} from 'react-native';
import {TextFontSize} from 'src/styles/FontSize';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rightComponentContainer: {gap: 8, flexDirection: 'row', alignItems: 'center'},
  rightComponentSection: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    justifyContent: 'space-between',
  },
  rightComponentText: {fontWeight: '400', fontSize: TextFontSize.micro},
});
