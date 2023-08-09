import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import { Products as ProductType } from "../types/types";

const Products = ({ products }: { products: ProductType[] | null }) => {
  return (
    <View className="pb-6">
      <View className="flex-row justify-between items-center my-2">
        <Text className="font-bold text-lg">
          {products && products[0]?.category}
        </Text>
        <TouchableWithoutFeedback>
          <Text>See all</Text>
        </TouchableWithoutFeedback>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {products?.map((product) => {
          return (
            <View key={product._id} className="bg-slate-100 p-4 ">
              <Image
                className="w-[160px] h-48"
                source={{
                  uri: "https://cdn5.vectorstock.com/i/1000x1000/62/39/coming-soon-nature-concept-vector-4896239.jpg",
                }}
              />
              {/* <Image
                className="w-[160px] h-48"
                source={{
                  uri: product?.image_url,
                }}
              /> */}
              <Text className="font-bold my-2 text-lg">{product.name}</Text>
              <Text className="font-bold text-lg">Ksh {product.price}</Text>
              <Text className="mb-2 font-bold">/{product.unit}</Text>
              <Button
                onPress={() => alert(`${product.name}, ${product._id}`)}
                title="Add to cart"
                color={"brown"}
              />
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Products;
