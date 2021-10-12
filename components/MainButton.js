import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Share } from "react-native";

const MainButton = ({
  postLink,
  nextMeme,
  loading,
  setLoading,
  error,
  setError,
  displayProp,
  setDisplayProp,
}) => {
  const loadNextMeme = () => {
    setLoading(true);
    setDisplayProp("none");
    nextMeme();
  };

  const shareMeme = async () => {
    try {
      const result = await Share.share({
        message: postLink,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
          console.log(`result.activityType : ${result.activityType}`);
        } else {
          // shared
          console.log(`Shared ...`);
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log(`Dismissed ...`);
      }
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.4} onPress={loadNextMeme}>
          <View style={{ ...styles.button, backgroundColor: "#fff" }}>
            <Text style={{ ...styles.buttonText, color: "#f7287b" }}>
              NEXT MEME
            </Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity activeOpacity={0.8} onPress={shareMeme}>
          <View style={{ ...styles.button, backgroundColor: "#f7287b" }}>
            <Text style={{ ...styles.buttonText, color: "#fff" }}>SHARE</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    width: "100%",
    height: 70,
  },
  btnContainer: {
    flex: 1,
  },
  button: {
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontSize: 18,
  },
});

export default MainButton;
