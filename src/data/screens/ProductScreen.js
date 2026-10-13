import { FlatList, Image, StyleSheet, View } from "react-native";

const products = [
  { id: "1", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "2", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "3", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "4", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "5", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "6", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "7", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
  { id: "8", image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/nike/nike1.png" },
];

export default function ProductScreen() {
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
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});