import React, {FC} from 'react';
import {StyleSheet, Text, TextProps} from 'react-native';
import {TextFontSize} from 'src/styles/FontSize';

interface IProps extends TextProps {
  text: string;
}
export const CustomText: FC<IProps> = ({style, text, ...restProps}) => {
  return (
    <Text style={[styles.text, style]} {...restProps}>
      {text}
    </Text>
  );
};
const styles = StyleSheet.create({
  text: {
    fontSize: TextFontSize.small,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
});
