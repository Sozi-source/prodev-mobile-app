import { useRouter } from "expo-router";
import { Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  const router = useRouter();
  return(
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground source={require("@/assets/images/background-image.png")}>
          <View>
            <Image source={require("@/assets/images/logo.png")} />

            <View>
              <Text>Find your favorite place here</Text>
              <Text>The best prices for over 2</Text>
              <Text>million properties worldwide</Text>
            </View>

            <View>
              <TouchableOpacity onPress={() => router.push("/join")}>
                <Text>Join here</Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push("/signin")}>
                <Text>Sign In</Text>
              </TouchableOpacity>
            </View>

            <View>
              <TouchableOpacity onPress={() => router.push("/(home)")}>
                <Text>Continue to home</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}


