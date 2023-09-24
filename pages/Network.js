import BottomSheet from '@gorhom/bottom-sheet';
import {
  ScrollView
} from 'react-native-gesture-handler';
import { Picker } from "@react-native-picker/picker";
import React, { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  BackHandler,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import MapView, { Marker } from 'react-native-maps';

const Data = [
  {
    id: 1,
    bgimg: require('../assets/paris.png'),
    bgimgShow1: require('../assets/effel.png'),
    imglocation: require('../assets/icon-location.png'),
    location: 'Paris, France',
    title: '2023 Agustus',
    title2: 'In Person Program',
    dsc: 'Sustainability Paris...',
    titleShow1: 'Techstars Sustainability Paris Accelerator',
    dscShow1: 'Techstars Sustainability Paris Accelerator Invests In Early Stage High-Growth Startups Looking To Build A Better Future Thanks To Technology, Willing To Thrive Globally. We Want To Solve Some Of The Greatest Challenges Our Planet Faces Today Such As Climate Change, Pollution, Poverty, Disease.',
    images: [
      {
        id: 1,
        logo: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Gojek-1280px-x-720px-1024x576.jpg' },
        logo2: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Garuda-Indonesia-1280px-x-720px-1024x576.jpg' },
        logo3: { uri: 'https://magetan.satujam.com/wp-content/uploads/2015/10/logo-pepsi.jpg?strip=all&lossy=1&ssl=1' },
        logo4: { uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/alphabet-m-corporate-company-logo-design-template-0e933095f93292d183d46aed37cc8c3a_screen.jpg?ts=1615224021' },
        logo5: { uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/logo-x-yang-akan-menggantikan-logo-twitter-sebelumnya-berbagai_230725134138-520.png' },
      }
    ]
  },
  {
    id: 2,
    bgimg: require('../assets/london.png'),
    imglocation: require('../assets/icon-location.png'),
    location: 'London, UK',
    title: '2023 Agustus',
    title2: 'In Person Program',
    dsc: 'London Accelerator',
    titleShow: 'Techstars Sustainability Paris Accelerator',
    dscShow: 'Techstars Sustainability Paris accelerator invests in early stage high-growth startups looking to build a better future thanks to technology, willing to thrive globally. We want to solve some of the greatest challenges our planet faces today such as climate change, pollution, poverty, disease.',
    images: [
      {
        id: 1,
        logo: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Gojek-1280px-x-720px-1024x576.jpg' },
        logo2: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Garuda-Indonesia-1280px-x-720px-1024x576.jpg' },
        logo3: { uri: 'https://magetan.satujam.com/wp-content/uploads/2015/10/logo-pepsi.jpg?strip=all&lossy=1&ssl=1' },
        logo4: { uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/alphabet-m-corporate-company-logo-design-template-0e933095f93292d183d46aed37cc8c3a_screen.jpg?ts=1615224021' },
        logo5: { uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/logo-x-yang-akan-menggantikan-logo-twitter-sebelumnya-berbagai_230725134138-520.png' },
      }
    ]
  },
  {
    id: 3,
    bgimg: require('../assets/berlin.png'),
    imglocation: require('../assets/icon-location.png'),
    location: 'Berlin, Germany',
    title: '2023 Agustus',
    title2: 'In Person Program',
    dsc: 'Berlin Accelerator',
    titleShow: 'Techstars Sustainability Paris Accelerator',
    dscShow: 'Techstars Sustainability Paris accelerator invests in early stage high-growth startups looking to build a better future thanks to technology, willing to thrive globally. We want to solve some of the greatest challenges our planet faces today such as climate change, pollution, poverty, disease.',
    images: [
      {
        id: 1,
        logo: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Gojek-1280px-x-720px-1024x576.jpg' },
        logo2: { uri: 'https://solusiprinting.com/wp-content/uploads/2020/08/Logo-Garuda-Indonesia-1280px-x-720px-1024x576.jpg' },
        logo3: { uri: 'https://magetan.satujam.com/wp-content/uploads/2015/10/logo-pepsi.jpg?strip=all&lossy=1&ssl=1' },
        logo4: { uri: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/alphabet-m-corporate-company-logo-design-template-0e933095f93292d183d46aed37cc8c3a_screen.jpg?ts=1615224021' },
        logo5: { uri: 'https://static.republika.co.id/uploads/images/inpicture_slide/logo-x-yang-akan-menggantikan-logo-twitter-sebelumnya-berbagai_230725134138-520.png' },
      }
    ]
  }
]

export default function Network() {
  const [selectedLanguage, setSelectedLanguage] = useState("Paris, France");
  const [selectedPlace, setSelectedPlace] = useState(false);
  // ref
  const bottomSheetRef = useRef(null);

  // variables
  const snapPoints = useMemo(() => ['25%', Dimensions.get("screen").width > 360 ? '45%' : "47.5"], []);

  const snapPointsClck = useMemo(() => ['25%', Dimensions.get("screen").width > 360 ? '50%' : "60"], []);

  const toggleSelected = () => {
    setSelectedPlace(!selectedPlace)
  }

  const closeSelected = () => {
    setSelectedPlace(null);
  }

  useEffect(() => {
    const handleBackButton = () => true;
    BackHandler.addEventListener("hardwareBackPress", handleBackButton);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", handleBackButton);
    };
  }, []);

  // callbacks
  // const handleSheetChanges = useCallback((index) => {
  //   console.log('handleSheetChanges', index);
  // }, []);
  return (
    <View style={{ backgroundColor: "white" }}>
      <View style={styles.headbar}>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            marginLeft: 20,
            paddingRight: 120,
            height: 180,
            gap: 25,
          }}
        >
          <View style={styles.border}>
            <Picker
              mode="dropdown"
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedLanguage(itemValue)
              }
            >
              <Picker.Item label="Paris, France" value="Paris, France" />
              <Picker.Item label="Investor" value="Investor" />
            </Picker>
          </View>
          <TouchableOpacity>
            <Image
              style={{ width: 57, height: 57 }}
              source={require("../assets/message-icon.png")}
            ></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            height: 35,
            position: "absolute",
            bottom: 0,
            width: "100%",
            backgroundColor: "#39C463",
            gap: 12,
          }}
        >
          <Text
            style={{
              display: "flex",
              flexDirection: 'column',
              justifyContent: "center",
              alignItems: "center",
              borderWidth: 2,
              borderColor: "white",
              paddingTop: 4,
              marginLeft: 20,
              paddingLeft: Dimensions.get('screen').width > 360 ? 28 : 32,
              paddingRight: 12,
              color: "white",
              fontSize: Dimensions.get('screen').width > 360 ? 12 : 16,
              width: Dimensions.get('screen').width > 360 ? 120 : 120,
              height: 24,
              borderRadius: 18,
            }}
          >
            10 Days Left
          </Text>
          <Text style={{ color: "white", fontWeight: "700" }}>
            Get tickets for Foundercon!
          </Text>
          <TouchableOpacity>
            <Image
              style={{ width: 20, marginLeft: Dimensions.get("screen").width > 360 ? 38 : 48 }}
              source={require("../assets/right-arrow.png")}
            ></Image>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <MapView
          style={{ width: "100%", height: "100%" }}
          initialRegion={{
            latitude: 48.86219674682523,
            longitude: 2.2933783309468683,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 48.86219674682523,
              longitude: 2.2933783309468683,
            }}
            image={require('../assets/penanda-paris.png')}
          />
          <Marker
            coordinate={{
              latitude: 51.51023462682856,
              longitude: -0.12912300706124955,
            }}
            image={require('../assets/penanda-london.png')}
          />
        </MapView>
      </View>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPointsClck}
      >
        <View style={{ display: "flex", alignItems: "center" }}>
          <ScrollView vertical showsVerticalScrollIndicator={false}>
            {Data.map((data) => (
              data.id === 1 && (
                <View style={{ height: "auto" }} key={data.id}>
                  <ImageBackground
                    source={data.bgimgShow1}
                    resizeMode="cover"
                    style={{
                      width: Dimensions.get('screen').width > 360 ? 360 : "49%", height: 120, marginTop: 16, marginHorizontal: 20
                    }}
                  ></ImageBackground>
                  <Text style={{ marginTop: 18, marginHorizontal: 20, fontSize: 24, fontWeight: '700' }}>{data.titleShow1}</Text>
                  <Text style={{ marginTop: 5, marginHorizontal: 20, fontSize: 14, width: Dimensions.get('screen').width > 360 ? 'auto' : '22%' }}>{data.dscShow1}</Text>
                  <TouchableOpacity
                    style={[styles.button, { backgroundColor: "#39C463", marginTop: 36 }]}
                  >
                    <Text style={styles.buttonText}>More Info</Text>
                  </TouchableOpacity>
                </View>
              )
            ))}
          </ScrollView>
        </View>
      </BottomSheet>
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <View style={styles.container}>
          <Text style={{ fontSize: 20, marginBottom: 5 }}>Nearest Accelerator</Text>
          <Text style={{ fontSize: 14 }}>nearest accelerator from your current location</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {Data.map((items) => (
            <TouchableOpacity onPress={toggleSelected} key={items.id} style={toggleSelected && selectedPlace}>
              <ImageBackground
                source={items.bgimg}
                resizeMode="cover"
                style={{
                  width: 331, height: 162, marginTop: 16, marginRight: items.id != 0 ? 20 : 0, marginLeft: items.id === 1 ? 20 : 0,
                }}
              >
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', alignItems: 'center' }}>
                  <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image style={{ width: 15, height: 15, marginLeft: 13, marginTop: 14 }} source={items.imglocation} />
                    <Text style={{ marginLeft: 3, marginTop: 14, color: 'white', fontFamily: 'sans-serif' }}>{items.location}</Text>
                  </View>
                  <View style={{ marginRight: 13 }}>
                    {items.images.map((images) => (
                      <View style={{ display: 'flex', flexDirection: 'row' }} key={images.id}>
                        <Image style={{ width: 18, height: 18, marginTop: 14, borderRadius: 10, padding: 11 }} source={images.logo} />
                        <Image style={{ width: 18, height: 18, marginTop: 14, borderRadius: 10, padding: 11, position: 'relative', right: 5 }} source={images.logo2} />
                        <Image style={{ width: 18, height: 18, marginTop: 14, borderRadius: 10, padding: 11, position: 'relative', right: 8 }} source={images.logo3} />
                        <Image style={{ width: 18, height: 18, marginTop: 14, borderRadius: 10, padding: 11, position: 'relative', right: 10 }} source={images.logo4} />
                        <Image style={{ width: 18, height: 18, marginTop: 14, borderRadius: 10, padding: 11, position: 'relative', right: 12 }} source={images.logo5} />
                      </View>
                    ))}
                  </View>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', gap: 13, marginLeft: 13, marginTop: 60 }}>
                  <Text style={{ color: 'white' }}>{items.title}</Text>
                  <Text style={{ color: 'white' }}>{items.title2}</Text>
                </View>
                <View style={{ marginLeft: 13 }}>
                  <Text style={{ color: 'white', fontSize: 32, fontWeight: '700' }}>{items.dsc}</Text>
                </View>
              </ImageBackground>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </BottomSheet>
      {/* <FlatList
          data={Data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => {
            return (
              <View key={item.id}>
                <ImageBackground
                  source={item.bgimg}
                  resizeMode="cover"
                  style={{ width: 311, height: 162, marginTop: 16 }}
                >
                  <View style={{ display: 'flex', flexDirection: 'row', alignitems: 'center' }}>
                    <Image style={{ width: 14, height: 14, marginLeft: 13, marginTop: 14 }} source={item.imglocation} />
                    <Text style={{ marginLeft: 3, marginTop: 14, color: 'white', fontFamily: 'sans-serif' }}>{item.location}</Text>
                  </View>
                </ImageBackground>
              </View>
            )
          }}
        /> */}
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 20,
    marginLeft: 20,
    display: "inline-flex",
    flexDirection: "column",
    alignItems: "flex-start",
  },
  headbar: {
    width: "100%",
    height: 180,
  },
  border: {
    width: "100%",
    borderWidth: 2,
    borderTopColor: "rgba(130, 152, 171, 0.50)",
    borderBottomColor: "rgba(130, 152, 171, 0.50)",
    borderRightColor: "rgba(130, 152, 171, 0.50)",
    borderLeftColor: "rgba(130, 152, 171, 0.50)",
  },
  button: {
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 14,
    paddingBottom: 14,
    paddingLeft: 10,
    paddingRight: 10,
    width: Dimensions.get('screen').width > 360 ? 354 : 320,
    borderRadius: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
});
