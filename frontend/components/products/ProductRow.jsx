import { ActivityIndicator, FlatList, Text, View } from 'react-native';
import React from 'react';
import styles from './productRow.styled';
import { COLORS, SIZES } from '../../constants';
import ProductCardView from './ProductCardView';
import useFetch from '../../hook/useFetch';

const ProductRow = () => {
  const { data, error, isLoading } = useFetch();

  return (
    <View style={styles.container}>
      {isLoading ? (
        <ActivityIndicator size={SIZES.xxlarge} color={COLORS.primary} />
      ) : error ? (
        <Text>Something went wrong</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <ProductCardView item={item} />}
          horizontal
          contentContainerStyle={{ columnGap: SIZES.medium }}
        />
      )}
    </View>
  );
};

export default ProductRow;
