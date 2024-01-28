import { TouchableOpacity, Text, View, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import styles from './productCardView.styled';
import { COLORS } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const ProductCardView = ({ item }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate('ProductDetails')}>
      <View style={styles.container}>
        <View style={styles.imgContainer}>
          <Image
            source={{ uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/cb2e64a8-ad4c-4d45-b58b-b0c7e11b6bb4-fn1.jpg" }}
            style={styles.img}
          />
        </View>

        <View style={styles.details}>
          <Text style={styles.title} numberOfLines={1}>{item.title}</Text>
          <Text style={styles.supplier} numberOfLines={1}>Product</Text>
          <Text style={styles.price}>$1999</Text>
        </View>

        <TouchableOpacity style={styles.addBtn}>
          <Ionicons name='add-circle' size={35} color={COLORS.primary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

export default ProductCardView;
