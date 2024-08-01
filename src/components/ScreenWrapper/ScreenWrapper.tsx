import {isAndroidDevice} from '@utils/isAndroidDevice';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet, ViewProps} from 'react-native';
import {COLORS} from 'src/styles/Colors';

interface IProps extends ViewProps {
  allowAreaInsets?: 'top' | 'always';
}

export const ScreenWrapper: React.FC<IProps> = ({style, children}) => {
  return (
    <SafeAreaView style={[styles.container, style]}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primaryWhite,
    paddingTop: isAndroidDevice ? StatusBar.currentHeight : 0,
  },
});
