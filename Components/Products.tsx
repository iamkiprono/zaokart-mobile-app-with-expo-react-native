import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  Button,
} from "react-native";

import { Products as ProductType } from "../types/types";

import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
const Products = ({ products }: { products: ProductType[] | null }) => {
  const { updateCart, cart } = useContext<any>(CartContext);

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
                  uri: "https://produits.bienmanger.com/35111-0w600h600_Organic_Apples_Story_From_Frnace.jpg",
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
                disabled={cart.some((x: any) => x.id === product._id)}
                onPress={() =>
                  updateCart({
                    image:
                      "https://cdn5.vectorstock.com/i/1000x1000/62/39/coming-soon-nature-concept-vector-4896239.jpg",
                    name: product.name,
                    price: product.price,
                    id: product._id,
                    quantity: 1,
                  })
                }
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
