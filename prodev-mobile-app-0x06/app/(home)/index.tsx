import PropertyListing from "@/components/PropertyListing/PropertyListing";
import { FILTERS, SAMPLE_DATA } from "@/constants/data";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableHighlight,
  View
} from "react-native";

const Home = () => {
  return (
     <SafeAreaView>
      <View>
        {/* Heading */}
        <View>
          <Text>Where to?</Text>
        </View>

        {/* Filters */}
        <View>
          <ScrollView>
            <View>
              {FILTERS.map((filter, index) => (
                <View key={index}>
                  <Image source={require("@/assets/images/background-image.png")} />
                  <Text>{filter}</Text>
                </View>
              ))}
            </View>
          </ScrollView>
        </View>

        {/* Property Listings */}
        <ScrollView>
          <PropertyListing listings={SAMPLE_DATA} />
          <View>
            <TouchableHighlight>
              <Text>Show more</Text>
            </TouchableHighlight>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
    
  );
};

export default Home;