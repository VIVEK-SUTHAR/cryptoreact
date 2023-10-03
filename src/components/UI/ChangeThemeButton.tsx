import React from "react";
import { TouchableOpacity } from "react-native";
import useThemeStore from "store/ThemeStore";
import { Box, Text } from "theme";

const ChangeThemeButton = () => {
  const { activeTheme, toggleTheme } = useThemeStore();
  return (
    <TouchableOpacity onPress={toggleTheme}>
      <Box flexDirection="row">
        <Text color="primaryCardText">{activeTheme}</Text>
      </Box>
    </TouchableOpacity>
  );
};

export default React.memo(ChangeThemeButton);
