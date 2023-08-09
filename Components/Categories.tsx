import { View, Text, ScrollView, Image } from "react-native";

const Categories = () => {
  const categories = [
    {
      name: "Fruits",
      items: [
        "Apples",
        "Oranges",
        "Bananas",
        "Grapes",
        "Strawberries",
        "Watermelons",
        "Peaches",
        "Pears",
      ],
    },
    {
      name: "Vegetables",
      items: [
        "Tomatoes",
        "Carrots",
        "Lettuce",
        "Broccoli",
        "Peppers",
        "Cucumbers",
        "Spinach",
        "Potatoes",
      ],
    },
    {
      name: "Grains",
      items: ["Wheat", "Rice", "Corn", "Oats", "Barley"],
    },
    {
      name: "Legumes",
      items: ["Beans", "Lentils", "Peas", "Chickpeas"],
    },
    {
      name: "Dairy",
      items: ["Milk", "Cheese", "Yogurt", "Butter"],
    },
    {
      name: "Meat and Poultry",
      items: ["Chicken", "Beef", "Pork", "Lamb"],
    },
    {
      name: "Eggs",
      items: [],
    },
    {
      name: "Herbs and Spices",
      items: ["Basil", "Oregano", "Thyme", "Rosemary", "Cilantro", "Mint"],
    },
    {
      name: "Nuts",
      items: ["Almonds", "Walnuts", "Pistachios", "Cashews"],
    },
    {
      name: "Other",
      items: ["Honey", "Maple syrup", "Mushrooms", "Flowers"],
    },
  ];
  return (
    <>
      <View className="my-4">
        <Text className="font-bold text-lg">Categories</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {categories.map((category) => {
            return (
              <View key={category.name}>
                <Image
                  className="w-20 h-20 m-2 rounded-lg"
                  source={{
                    uri: "https://cdn-prod.medicalnewstoday.com/content/images/articles/325/325253/assortment-of-fruits.jpg",
                  }}
                />
                <Text className="text-center font-bold">{category.name}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </>
  );
};

export default Categories;
