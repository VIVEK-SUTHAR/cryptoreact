import useLatestBlock from "hooks/useLatestBlock";
import React, { useEffect, useRef } from "react";
import { Animated, Easing } from "react-native";
import { Box, Text } from "theme";

const AnimatedText = Animated.createAnimatedComponent(Text);
function LatestBlock() {
  const { blockNumber } = useLatestBlock();
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 500,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start(() => {
      opacity.setValue(1);
    });
  }, [blockNumber, opacity]);

  return (
    <Box backgroundColor="mainBackground" flexDirection="row">
      <Text color="accent">Last Block :</Text>
      <AnimatedText color="accent" opacity={opacity}>
        {blockNumber}
      </AnimatedText>
    </Box>
  );
}

export default LatestBlock;
