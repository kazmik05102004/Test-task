import {View} from 'react-native';
import React, {FC} from 'react';
import {CustomText} from '@components/CustomText/CustomText';
import {styles} from './styles';

interface IProps {
  pageName: string;
  title: string;
  destination: string;
  rightComponent: React.JSX.Element;
}

export const Header: FC<IProps> = ({
  pageName,
  title,
  destination,
  rightComponent,
}) => {
  return (
    <View style={styles.container}>
      <CustomText text={pageName} style={styles.title} />
      <View style={styles.subHeader}>
        <View style={styles.leftContent}>
          <CustomText text={title} style={styles.topText} />
          <CustomText text={destination} style={styles.bottomText} />
        </View>
        {rightComponent}
      </View>
    </View>
  );
};
