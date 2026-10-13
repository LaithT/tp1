import { FlatList, Image, StyleSheet, View } from "react-native";
import products from "../products.js";


 const ProductScreen = ()  => {
  return (
    <FlatList
      data={products}
      numColumns={2}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.grid}
      renderItem={({ item }) => (
        <View style={styles.cell}>
          <Image
            source={{ uri: item.image }}
            style={styles.image}
            resizeMode="contain"
          />
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  grid: {
    padding: 16,
    
  },
  cell: {
    width: "50%",
    height: 230,
    padding: 8,
    justifyContent: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

 export default  ProductScreen;