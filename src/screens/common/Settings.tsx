import DisconnectButton from "components/UI/DisconnectButton";
import { APP_DESC, APP_NAME } from "constants/index";
import React, { FC } from "react";
import { Switch } from "react-native";
import useThemeStore from "store/ThemeStore";
import { Box, Text, theme } from "theme";
import { SettingsProp } from "types/navigation";

const Settings: FC<SettingsProp> = () => {
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
      <DisconnectButton />
    </Box>
  );
};

export default Settings;
