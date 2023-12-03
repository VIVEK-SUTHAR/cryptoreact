import { NavigationContainer, useNavigation } from "@react-navigation/native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ConnectWallet from "screens/Auth/ConnectWallet";
import { ThemeProvider } from "@shopify/restyle";
import { Box, darkTheme, theme } from "theme";
import useThemeStore from "store/ThemeStore";
import { StatusBar } from "expo-status-bar";
import ChangeThemeButton from "components/UI/ChangeThemeButton";
import { type RootStackParamList } from "types/navigation";
import SignInWithEth from "screens/Auth/SignInWithEth";
import Home from "screens/Home";
import { TouchableOpacity } from "react-native";
import SettingIcon from "icons/Settings";
import Settings from "screens/common/Settings";
import DebugScreen from "screens/Debug";

const Stack = createNativeStackNavigator<RootStackParamList>();

const headerRight = () => {
  const navigation = useNavigation();
  const goToSettings = () => {
    navigation.navigate("Settings");
  };
  return (
    <Box flexDirection="row" alignItems="center" gap="m">
      <ChangeThemeButton />
      <TouchableOpacity activeOpacity={0.5} onPress={goToSettings}>
        <SettingIcon height={24} width={24} />
      </TouchableOpacity>
    </Box>
  );
};

const RootStackNavigator = () => {
  const { activeTheme } = useThemeStore();

  const isDarkTheme = activeTheme === "dark";

  const statusBarBg = isDarkTheme
    ? darkTheme.colors.mainBackground
    : theme.colors.mainBackground;

  const headerStyle = {
    backgroundColor: statusBarBg,
  };

  const headerTintColor = isDarkTheme
    ? darkTheme.colors.primaryCardText
    : theme.colors.primaryCardText;

  const statusBarStyle = isDarkTheme ? "light" : "dark";
  return (
    <ThemeProvider theme={isDarkTheme ? darkTheme : theme}>
      <StatusBar backgroundColor={statusBarBg} style={statusBarStyle} />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle,
            headerTintColor,
            headerRight,
          }}
        >
          <Stack.Group key={"Auth Screens"}>
            <Stack.Screen name="ConnectWallet" component={ConnectWallet} />
            <Stack.Screen name="SignInWithEth" component={SignInWithEth} />
          </Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Debug" component={DebugScreen} />
          <Stack.Screen
            name="Settings"
            component={Settings}
            options={{
              animation:"fade_from_bottom",
              headerRight: () => null,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default RootStackNavigator;
