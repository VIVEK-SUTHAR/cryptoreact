import { Appearance } from "react-native";
import React from "react";
import * as SystemUI from "expo-system-ui";

const useSystemUI = () => {
  React.useEffect(() => {
    updateRootUIColor();
    const unsubscribe = Appearance.addChangeListener(updateRootUIColor);
    return () => {
      unsubscribe.remove();
    };
  }, []);
};

function updateRootUIColor() {
  const devicePreferredTheme = Appearance.getColorScheme() ?? "dark";

  SystemUI.setBackgroundColorAsync(
    devicePreferredTheme === "light" ? "white" : "black"
  );
}

export default useSystemUI;
