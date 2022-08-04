import { View, Text, StyleSheet } from "react-native";
import React from "react";
// import AppIntroSlider from "./node_modules/react-native-app-intro-slider/dist/index.d";
import Slider from "./components/Slider";
import AppIntroSlider from "react-native-app-intro-slider";
import { SIZES, COLORS } from "./src/constants/theme";
import slides from "./src/constants/onboarding";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Login from "./screens/Login";
import Register from "./screens/Register";

export default function App() {
  const [showHomePage, setShowHomePage] = React.useState(false);
  const [isFirstLaunch, setIsFirstLaunch] = React.useState(null);

  React.useEffect(() => {
    AsyncStorage.getItem("alreadyLaunched").then((value) => {
      if (value === null) {
        AsyncStorage.setItem("alreadyLaunched", "true");
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    });
  }, []);

  const buttonLabel = (label) => {
    return (
      <View style={styles.labelContainer}>
        <Text style={styles.labelText}>{label}</Text>
      </View>
    );
  };

  if (isFirstLaunch === null) {
    return null;
  } else if (isFirstLaunch === true) {
    return (
      <AppIntroSlider
        data={slides}
        renderItem={({ item }) => <Slider item={item} />}
        activeDotStyle={{ backgroundColor: COLORS.primary, width: 30 }}
        showSkipButton
        renderNextButton={() => buttonLabel("Next")}
        renderSkipButton={() => buttonLabel("Skip")}
        renderDoneButton={() => buttonLabel("Done")}
        onDone={() => {
          return <Register />;
        }}
      />
    );
  } else {
    return <Register />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  labelContainer: {
    padding: 12,
  },
  labelText: {
    color: COLORS.title,
    fontWeight: "600",
    fontSize: SIZES.h4,
  },
});
