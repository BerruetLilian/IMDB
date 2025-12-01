import { StyleSheet, ScrollView } from "react-native";
import michelle from "../assets/img/michelle.jpeg";
import stephanie from "../assets/img/stephanie.jpeg";
import jamie from "../assets/img/jamie.jpeg";
import ke from "../assets/img/ke.jpeg";
import Actor from "./Actor";

const Carrousel = () => {
  const actors = [
    {
      picture: michelle,
      name: "Michelle Yeoh",
      role: "Evelyn Wang",
    },
    {
      picture: stephanie,
      name: "Stephanie Hsu",
      role: "Joy Wang, Jobu Tupaki",
    },
    {
      picture: jamie,
      name: "Jamie Lee Curtis",
      role: "Deirdre Beaubeidre",
    },
    {
      picture: ke,
      name: "Ke Huy Quan",
      role: "Waymond Wang",
    },
  ];
  return (
    <ScrollView
      contentContainerStyle={styles.carrouselContainer}
      horizontal={true}
    >
      {actors.map((actor, index) => {
        return <Actor actor={actor} key={index + actor.name} />;
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  carrouselContainer: {
    gap: 5,
    flexDirection: "row",
  },
});

export default Carrousel;
