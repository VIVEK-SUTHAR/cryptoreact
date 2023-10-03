import { createBox, createText, createTheme } from "@shopify/restyle";

export const palette = {
  white: "#FFFFFF",
  black: "#202124",
  darkGray: "gray",
  lightGray: "white",
  hotpink: "hotpink",
};

export const theme = createTheme({
  spacing: {
    s: 8,
    m: 16,
  },
  colors: {
    mainBackground: palette.white,
    primaryCardText: "black",
    secondaryCardText: palette.darkGray,
    accent: "hotpink",
  },
  textVariants: {
    defaults: {},
    body: {
      fontSize: 16,
      lineHeight: 24,
      color: "primaryCardText",
    },
    heading: {
      fontSize: 20,
      lineHeight: 28,
      color: "primaryCardText",
    },
  },
  cardVariants: {
    defaults: {},
    primary: {
      backgroundColor: "primaryCardBackground",
      shadowOpacity: 0.3,
    },
    secondary: {
      backgroundColor: "secondaryCardBackground",
      shadowOpacity: 0.1,
    },
  },
});

export type Theme = typeof theme;

export const darkTheme: Theme = {
  ...theme,
  colors: {
    ...theme.colors,
    mainBackground: palette.black,
    primaryCardText: "white",
    secondaryCardText: "#3C4043",
  },
};

export const Box = createBox<Theme>();
export const Text = createText<Theme>();
