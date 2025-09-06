import PropertyListing from "@/components/PropertyListing/PropertyListing";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { styles } from "@/styles/_mainstyle";
import {
  Image,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const Home = () => {
  return (
    <View style={styles.backgroundImageContainer}>
      <View style={styles.titleContainer}>
        <Text style={styles.titleText}>Where to? </Text>
      </View>
      

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
       
       
        <ScrollView contentContainerStyle={styles.buttonGroup}>
          <View style={styles.container}>
            {FILTERS.map((filter, index) => (
              <View style={styles.backgroundImageContainer} key={index}>
                <Image
                  style={{
                    flex: 1,
                  }}
                  source={require("@/assets/images/background-image.png")}
                  resizeMode="contain"
                />
                <Text>{filter}</Text>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>

      <ScrollView contentContainerStyle={styles.buttonGroup}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.container}>
          <TouchableHighlight style={styles.container}>
            <Text style={styles.titleSubText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;