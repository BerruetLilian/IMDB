import { StyleSheet, Image, View } from "react-native";
import logo from "../assets/img/logo-imdb.png";
import { Shadow } from "react-native-shadow-2";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image source={logo} resizeMode="contain" style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    backgroundColor: "#393939",
    padding: 10,
  },
  logo: {
    height: 40,
    width: 82,
  },
});

export default Header;
