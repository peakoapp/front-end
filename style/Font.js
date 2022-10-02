import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

const Font = () => {
  const [fontsLoaded] = useFonts({
    "poppins-extralight": require("../assets/fonts/Poppins/Poppins-ExtraLight.ttf"),
    "poppins-italic": require("../assets/fonts/Poppins/Poppins-Italic.ttf"),
    "poppins-light": require("../assets/fonts/Poppins/Poppins-Light.ttf"),
    "poppins-medium": require("../assets/fonts/Poppins/Poppins-Medium.ttf"),
    "poppins-regular": require("../assets/fonts/Poppins/Poppins-Regular.ttf"),
    "poppins-thin": require("../assets/fonts/Poppins/Poppins-Thin.ttf"),
    "poppins-semibold": require("../assets/fonts/Poppins/Poppins-SemiBold.ttf"),
  });
  useEffect(() => {
    async function prepare() {
      await SplashScreen.preventAutoHideAsync();
    }
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
};

export default Font;