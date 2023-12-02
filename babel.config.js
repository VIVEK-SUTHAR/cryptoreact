module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            assets: "./assets",
            components: "./src/components",
            constants: "./src/constants",
            hooks: "./src/hooks",
            navigation: "./src/navigation",
            screens: "./src/screens",
            store: "./src/store",
            utils: "./src/utils",
            theme: "./src/theme",
            icons:"./src/icons",
            providers:"./src/providers",
          },
        },
      ],
    ],
  };
};
