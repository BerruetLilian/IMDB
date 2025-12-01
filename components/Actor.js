import { StyleSheet, Image, View, Text } from "react-native";

const Actor = ({ actor }) => {
  return (
    <View style={styles.actorContainer}>
      <Image
        source={actor.picture}
        style={styles.carrouselPicture}
        resizeMethod="cover"
      />
      <Text style={styles.carrouselText} numberOfLines={1}>
        {actor.name}
      </Text>
      <Text style={styles.carrouselBaseline} numberOfLines={1}>
        {actor.role}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  actorContainer: {
    gap: 5,
    backgroundColor: "#2A2A2A",
    width: 140,
    paddingBottom: 10,
    borderRadius: 5,
  },
  carrouselPicture: {
    height: 205,
    width: 140,
  },
  carrouselText: {
    color: "#fff",
    fontSize: 14,
    paddingLeft: 10,
    paddingRight: 10,
  },
  carrouselBaseline: {
    fontSize: 13,
    color: "#9A9A9A",
    paddingLeft: 10,
    paddingRight: 10,
  },
});

export default Actor;
