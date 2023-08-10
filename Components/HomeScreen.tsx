import { View, Text, ScrollView, RefreshControl } from "react-native";
import React from "react";
import SearchInput from "./SearchInput";
import Categories from "./Categories";
import Products from "./Products";
import { getProducts } from "../Hooks/useFetch";

const HomeScreen = () => {
  const { products, loading, error, fetchProducts } = getProducts();

  

  return (
    <View className="pt-8 flex-1">
      <SearchInput />
      <View className="flex-1 px-4 ">
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={() => fetchProducts()}
            />
          }
        >
          <Categories />
          {error && <Text className="text-red-500">{error}</Text>}

          {/* fruits  */}
          <Products
            products={
              products && products?.filter((x) => x.category === "Fruits")
            }
          />

          {/* Vegetables */}
          <Products
            products={
              products && products?.filter((x) => x.category === "Vegetables")
            }
          />

          {/* Greens */}
          <Products
            products={
              products && products?.filter((x) => x.category === "Greens")
            }
          />

          {/* Herbs */}
          <Products
            products={
              products && products?.filter((x) => x.category === "Herbs")
            }
          />
          {/* Legumes */}
          <Products
            products={
              products && products?.filter((x) => x.category === "Legumes")
            }
          />
        </ScrollView>
      </View>
    </View>
  );
};

export default HomeScreen;
