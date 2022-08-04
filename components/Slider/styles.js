import { StyleSheet, Dimensions } from "react-native";
import { COLORS, SIZES } from "../../src/constants/theme";

const styles = StyleSheet.create({
  image: {
    width: SIZES.width - 80,
    height: 400,
  },
  data: {
    flex: 1,
    alignItems: "center",
    padding: 15,
    paddingTop: 100,
  },
  title: {
    fontWeight: "bold",
    color: COLORS.title,
    fontSize: SIZES.h1,
  },
  description: {
    textAlign: "center",
    paddingTop: 5,
    color: COLORS.title,
  },
});

export default styles;
