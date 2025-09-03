import PropertyListing from "@/components/PropertyListing";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import { styles } from "@/styles/propertyCardStyle";
import { Feather } from "@expo/vector-icons";
import {
  Image,
  ScrollView,
  Text,
  TextInput,
  TouchableHighlight,
  View
} from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.cardGroup}>
        <View style={styles.cardGroup}>
          <View style={styles.cardTextGroup}>
            <Text style={styles.cardLargeText}>Where to?</Text>
            <TextInput
              style={{ ...styles.cardTextGroup, ...styles.cardTextGroup }}
              placeholder="Location . Date . Add guest"
            />
          </View>
          <View style={styles.cardTextGroup}>
            <Feather name="search" size={24} color="white" />
          </View>
        </View>
      </View>

      <View
        style={{
          height: 72,
          backgroundColor: "white",
        }}
      >
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.cardTextGroup}>
            {FILTERS.map((filter, index) => (
              <View style={styles.container} key={index}>
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

      <ScrollView style={styles.group}>
        <PropertyListing listings={SAMPLE_DATA} />
        <View style={styles.group}>
          <TouchableHighlight style={styles.cardGroup}>
            <Text style={styles.cardLargeText}>Show more</Text>
          </TouchableHighlight>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;