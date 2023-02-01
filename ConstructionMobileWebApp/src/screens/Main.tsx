import React from "react";
import { View, ScrollView, Image } from "react-native";
import { StyleSheet } from 'react-native';
import BannerCarousel from "../components/BannerCarousel";
import CategoriesButton from "../components/ButtonCategory";
import Top from "../components/Top";
import ProductCard from "../components/ProductCard";
import { Products } from "../data/Products";
import { Images, Banners, Categories } from "./data";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";


export default function Main({ navigation }: BottomTabBarProps) {
  const [selectedCategory, setSelectedCategory] = React.useState(0);

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <BannerCarousel />
        <Top style={{ fontSize: 14, marginTop: 10 }}>Categorias</Top>
        <View style={styles.categoriesContainer}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              alignItems: "center",
              justifyContent: "center",
            }}
            style={styles.scrollView}
            horizontal={true}
          >
            {Categories.map((category) => (
              <CategoriesButton
                key={category.index}
                text={category.text}
                sale={category.sale}
                selected={category.index === selectedCategory}
                onPress={() => setSelectedCategory(category.index)}
              />
            ))}
          </ScrollView>
        </View>
        <View style={styles.productsContainer}>
          <Top style={{ fontSize: 14 }}>Produtos Populares</Top>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {Products.map((product, index) => (
              <ProductCard
                key={index}
                index={index}
                title={product.title}
                category={product.category}
                source={product.images[0]}
                navigation={navigation}
              />
            ))}
          </ScrollView>
          <View style={styles.brandsContainer}>
            <ScrollView
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ display: "flex", alignItems: "center" }}
              horizontal
            >
              {Images.map((image, index) => (
                <Image
                  key={index}
                  source={image.source}
                  style={{
                    marginRight: 30,
                    marginBottom: 10,
                    width: image.width,
                    height: image.height,
                  }}
                  resizeMode="stretch"
                />
              ))}
            </ScrollView>
          </View>
        </View>
        <View style={styles.bannersContainer}>
          {Banners.map((banner, index) => (
            <Image
              key={index}
              source={banner.source}
              style={{
                width: "100%",
                height: 146,
                marginBottom: index != Banners.length ? 2 : 0,
              }}
              resizeMode="stretch"
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#FAFAFA",
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  categoriesContainer: {
    height: 60,
  },
  scrollView: {
    display: "flex",
    marginLeft: 32,
    flexDirection: "row",
  },
  productsContainer: {
    marginTop: 17,
    display: "flex",
    alignItems: "flex-start",
    paddingLeft: 32,
    height: 330,
    width: "100%",
  },
  brandsContainer: {
    marginLeft: 5,
    marginTop: 10,
    width: "100%",
  },
  bannersContainer: {
    marginTop: 30,
    width: "100%",
  },
});
