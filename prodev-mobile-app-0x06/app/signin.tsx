import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Ionicons/>
          <Image source={require('@/assets/images/logo.png')}/>
        </View >
        
        <View>
          <Text>Sign in to your</Text>
        <Text>Account</Text>
        <Text>Enter your email and password to sign in.</Text>

        <View>
          
          <View>
            <Text>Email</Text>
            <TextInput keyboardType="email-address"/>
          </View>
          
          <View>
            <Text>Password</Text>
            <View>
              <TextInput/>
              <FontAwesome/>
            </View>
        
        </View>
        <Text>Forgot password?</Text>
        </View>
        <TouchableOpacity>
          <Text>Sign in</Text>
        </TouchableOpacity>

        <View>
          <View
    
          ></View>
          <Text
            
          >
            OR
          </Text>
          <View
          ></View>
        </View>

        <View>
          <TouchableOpacity>
            <View>
              <Image source={require("@/assets/images/google.png")} />
              <Text>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View>
              <Image source={require("@/assets/images/facebook.png")} />
              <Text>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View>
          <Text>Don't have an account?</Text>
          <Text>Join now</Text>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>    
  );
}
