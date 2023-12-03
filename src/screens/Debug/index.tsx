import React, { type FC } from "react";
import { Pressable, SectionList, StyleSheet, View } from "react-native";
import appJson from "../../../app.json";
import packageJSON from "../../../package.json";
import { Box, Text } from "theme";
//@ts-expect-error
const isHermes = String(!!global.HermesInternal);
//@ts-expect-error
const uiManager = global?.nativeFabricUIManager ? "Fabric" : "Paper";
const isNewArchitectureEnabled = String(uiManager === "Fabric");
const appBundleLoadTime = String(__BUNDLE_START_TIME__);
const sections = [
  {
    title: "App Architecture",
    data: [
      { label: "Hermes Enabled", value: isHermes },
      { label: "UI Manager", value: uiManager },
      { label: "New Architecture Enabled", value: isNewArchitectureEnabled },
      { label: "JS Dev Mode", value: String(__DEV__) },
    ],
  },
  {
    title: "Core Versions",
    data: [
      {
        label: "React Native Version",
        value: packageJSON.dependencies["react-native"],
      },
      { label: "Expo SDK", value: packageJSON.dependencies.expo },
    ],
  },
  {
    title: "Release Details",
    data: [
      { label: "App Version", value: appJson.expo.version },
      {
        label: "Android Version Code",
        value: appJson.expo.android.versionCode.toString(),
      },
      { label: "iOS Build number", value: appJson.expo.ios.buildNumber },
    ],
  },
];

const renderItem: FC<{ item: { label: string; value: string } }> = ({
  item,
}) => <Item label={item.label} value={item.value} />;

const renderSectionHeader: FC<{ section: { title: string } }> = ({
  section,
}) => (
  <Text
    variant="heading"
    color="primaryCardText"
    style={{
      fontSize: 16,
      fontWeight: "600",
      marginVertical: 4,
    }}
  >
    {section.title}
  </Text>
);
const DebugScreen: FC = () => {
  return (
    <Box flex={1} backgroundColor="mainBackground" p="s">
      <SectionList
        sections={sections}
        keyExtractor={(item, index) => item.label + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ListHeaderComponent={<ListHeader />}
      />
    </Box>
  );
};

type ItemProps = {
  label: string;
  value: string;
};

const ListHeader = () => {
  return (
    <View>
      <Item label="App Bundle Load Time" value={appBundleLoadTime} />
    </View>
  );
};

const Item: FC<ItemProps> = ({ label, value }: ItemProps) => (
  <Pressable
    android_ripple={{
      color: "rgba(255,255,255,0.1)",
    }}
    style={styles.itemContainer}
  >
    <View style={styles.itemContent}>
      <Text style={styles.itemText} color="primaryCardText">
        {label}
      </Text>
    </View>
    <Text style={styles.itemText} color="primaryCardText">
      {value}
    </Text>
  </Pressable>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    paddingVertical: 12,
    paddingHorizontal: 12,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: "rgba(0,0,0,0.2)",
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 18,
    paddingHorizontal: 6,
  },
});

export default DebugScreen;
