import {BusCard} from '@components/BusCard/BusCard';
import {CustomText} from '@components/CustomText/CustomText';
import {ScreenWrapper} from '@components/ScreenWrapper/ScreenWrapper';
import {NavigationProp} from '@react-navigation/native';
import mockedData from '@utils/mockedData.json';
import {RouteDataType} from '@utils/types';
import React, {FC, useCallback} from 'react';
import {FlatList, ListRenderItem, View} from 'react-native';
import {RootStackParamList} from 'src/navigation/AppNavigation';
import {styles} from './styles';

interface HomeProps {
  navigation: NavigationProp<RootStackParamList, 'Home'>;
}

const ItemSeparetor = () => <View style={styles.itemSeparator} />;

const ListHeader = () => (
  <CustomText style={styles.flatListHeader} text={'Select your route'} />
);

export const Home: FC<HomeProps> = ({navigation}) => {
  const renderItem: ListRenderItem<RouteDataType> = useCallback(
    ({item}) => {
      return <BusCard busInfo={item} navigation={navigation} />;
    },
    [navigation],
  );

  return (
    <ScreenWrapper allowAreaInsets="top">
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={ListHeader}
          style={styles.flatList}
          data={mockedData}
          renderItem={item => renderItem(item)}
          keyExtractor={item => item.id.toString()}
          ItemSeparatorComponent={ItemSeparetor}
          removeClippedSubviews={false}
        />
      </View>
    </ScreenWrapper>
  );
};
