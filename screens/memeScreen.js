import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import ImageLoader from "../components/ImageLoader";
import MainButton from "../components/MainButton";
import axios from "axios";

const MemeScreen = () => {
  const [postLink, setPostLink] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [displayProp, setDisplayProp] = useState("none");

  const nextMeme = async () => {
    // https://meme-api.herokuapp.com/gimme
    try {
      const imgUrl = (await axios.get(`https://meme-api.herokuapp.com/gimme`))
        .data.url;
      setPostLink(imgUrl);
      console.log(imgUrl);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.screen}>
      {/* Meme Comes Here */}
      <ImageLoader
        postLink={postLink}
        nextMeme={nextMeme}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        displayProp={displayProp}
        setDisplayProp={setDisplayProp}
      />
      <MainButton
        postLink={postLink}
        nextMeme={nextMeme}
        loading={loading}
        setLoading={setLoading}
        error={error}
        setError={setError}
        displayProp={displayProp}
        setDisplayProp={setDisplayProp}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    paddingTop: 20,
    width: "100%",
    height: "100%",
    alignItems: "center",
  },
});

export default MemeScreen;
