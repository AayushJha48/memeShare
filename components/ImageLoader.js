import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  Text,
  ActivityIndicator,
} from "react-native";
// import { Entypo } from "@expo/vector-icons";

const ImageLoader = ({
  postLink,
  nextMeme,
  loading,
  setLoading,
  error,
  setError,
  displayProp,
  setDisplayProp,
}) => {
  const onLoad = (e) => {
    setLoading(false);
    setDisplayProp("flex");
    console.log("Onload function runs");
  };

  const onError = (err) => {
    setError(true);
  };

  useEffect(() => {
    console.log("new ... ");
    nextMeme();
  }, []);

  return (
    <View style={styles.screen}>
      {/* <Entypo name="share" size={60} color="rgba(0,0,0,0.3)" /> */}
      {loading && <ActivityIndicator color="#f7287b" size="large" />}
      {postLink && (
        <Image
          style={{
            width: Dimensions.get("window").width,
            height: "90%",
            resizeMode: "contain",
            display: displayProp,
          }}
          source={{
            uri: postLink,
          }}
          onLoad={onLoad}
          onError={onError}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageLoader;
