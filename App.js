import { StyleSheet, View } from "react-native";
import ProductScreen from "./src/data/screens/ProductScreen";



export default function App() {
  return (
    <View style={styles.container}>
      <ProductScreen />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "blue",
  },
});