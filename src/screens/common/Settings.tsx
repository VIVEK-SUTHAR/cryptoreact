import DisconnectButton from "components/UI/DisconnectButton";
import { APP_DESC, APP_NAME } from "constants/index";
import React, { FC } from "react";
import { Switch, TouchableOpacity } from "react-native";
import useThemeStore from "store/ThemeStore";
import { Box, Text, theme } from "theme";
import { SettingsProp } from "types/navigation";

const Settings: FC<SettingsProp> = ({ navigation }) => {
  const { activeTheme, toggleTheme } = useThemeStore();

  return (
    <Box flex={1} backgroundColor="mainBackground" p="s">
      <Text variant="heading" py="s" color="primaryCardText">
        {APP_NAME}
      </Text>
      <Text py="s" color="primaryCardText">
        {APP_DESC}
      </Text>
      <Box
        alignItems="center"
        justifyContent="space-between"
        flexDirection="row"
      >
        <Text variant="body" color="primaryCardText">
          Theme: {activeTheme}
        </Text>
        <Switch
          value={activeTheme === "dark"}
          thumbColor={theme.colors.accent}
          onValueChange={() => {
            toggleTheme();
          }}
        />
      </Box>
      <Box backgroundColor="mainBackground" my="m">
        <TouchableOpacity onPress={() => navigation.navigate("Debug")}>
          <Text color="primaryCardText" variant="heading">
            App Details
          </Text>
        </TouchableOpacity>
      </Box>
      <DisconnectButton />
    </Box>
  );
};

export default Settings;
