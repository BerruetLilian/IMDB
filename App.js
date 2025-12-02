import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
} from "react-native";
import Constants from "expo-constants";
import Header from "./components/Header.js";
import movie from "./assets/img/movie.jpeg";
import { AntDesign, Feather } from "@expo/vector-icons";
import Carrousel from "./components/Carrousel.js";

// BOTTOM STATUS BAR
const App = () => {
  return (
    <ScrollView style={styles.scrollView}>
      <Header />
      <View style={styles.main}>
        {/* Carte du titre */}
        <View style={styles.card}>
          <Text style={styles.title}>Everything Everywhere All at Once</Text>
          <View style={styles.baselineContainer}>
            <Text style={styles.baseline}>2022</Text>
            <Text style={styles.baseline}>Tous publics</Text>
            <Text style={styles.baseline}>2h 19min</Text>
            <Text style={[styles.baseline, styles.noShrink]} numberOfLines={1}>
              Arts Martiaux, Aventure épique, Comédie noire
            </Text>
          </View>
          <View style={styles.content}>
            <Image style={styles.movie} source={movie} />
            <View style={styles.descriptionContainer}>
              <Text style={styles.description} numberOfLines={6}>
                Dans l'ascenseur menant au contrôle fiscal de leur laverie,
                Waymond, qui adopte un comportement bizarre, explique à sa femme
                qu'elle seule peut sauver l'univers en utilisant les aptitudes
                de ses doubles provenant de mondes parallèles.
              </Text>
              <TouchableOpacity style={styles.watchlistBtn}>
                <Text style={styles.watchlistBtnText}>+ ADD TO WATCHLIST</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.ratings}>
            <View style={{ alignItems: "center" }}>
              <AntDesign name="star" size={24} color="yellow" />
              <View style={styles.ratingsRow}>
                <Text style={styles.ratingsBoldText}>7,7</Text>
                <Text style={styles.ratingsText}>/10</Text>
              </View>
              <Text style={styles.ratingsBaseline}>598 k</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Feather name="star" size={24} color="white" />
              <Text style={styles.ratingsBoldText}>RATE THIS</Text>
            </View>
            <View style={{ alignItems: "center" }}>
              <Text style={styles.metacritic}>81</Text>
              <Text style={styles.ratingsText}>Metascore</Text>
              <Text style={styles.ratingsBaseline}>55 critics reviews</Text>
            </View>
          </View>
        </View>
        {/* Carte des acteurs */}
        <View style={styles.card}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={styles.cardLabel}>Top Billed Cast</Text>
            <Text style={styles.seeAll}>SEE ALL</Text>
          </View>
          <Carrousel />
          <View>
            <Text style={styles.ratingsText}>Director</Text>
            <Text style={styles.baseline}>
              Daniel Kwan and Daniel Scheinert
            </Text>
          </View>
          <View>
            <Text style={styles.ratingsText}>Writers</Text>
            <Text style={styles.baseline}>
              Daniel Kwan (written by) and Daniel Scheinert (written by)
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#191919",
  },
  title: {
    color: "#fff",
    fontSize: 27,
  },
  baseline: {
    fontSize: 13,
    color: "#BCBCBC",
  },
  baselineContainer: {
    flexDirection: "row",
    gap: 10,
  },
  main: {
    gap: 20,
    paddingBottom: Constants.statusBarHeight + 30,
  },
  card: {
    backgroundColor: "#212121",
    paddingTop: 20,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 15,
    gap: 10,
  },
  noShrink: {
    flexWrap: "wrap",
    flexShrink: 1,
  },
  ratingsRow: {
    flexDirection: "row",
    alignItems: "flex-end",
  },
  content: {
    flexDirection: "row",
    gap: 20,
  },
  description: {
    fontSize: 14,
    color: "#fff",
  },
  movie: {
    height: 150,
    width: 100,
  },
  watchlistBtn: {
    backgroundColor: "#0277BD",
    height: 35,
    justifyContent: "center",
    alignItems: "center",
  },
  watchlistBtnText: {
    color: "#fff",
    fontSize: 14,
  },
  descriptionContainer: {
    gap: 10,
    flexShrink: 1,
  },
  ratings: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  ratingsBoldText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: 700,
  },
  ratingsText: {
    color: "#fff",
    fontSize: 14,
  },
  ratingsBaseline: {
    fontSize: 13,
    color: "#9A9A9A",
  },
  metacritic: {
    color: "#fff",
    backgroundColor: "#60C44E",
    alignItems: "center",
    justifyContent: "center",
    padding: 2,
  },
  cardLabel: {
    color: "#fff",
    fontSize: 18,
  },
  seeAll: {
    fontSize: 18,
    color: "#1392CD",
  },
});

export default App;
