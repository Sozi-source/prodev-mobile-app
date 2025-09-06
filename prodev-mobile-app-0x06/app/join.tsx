import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View>
          <Ionicons name="arrow-back" size={25}/>
          {/* <Image source={require('@/assets/images/icon.png')}/> */}
        </View >
        
        <View>
          <Text>Join</Text>
        <Text>Account</Text>
        <Text>Enter your email and password to Join.</Text>

        <View>
          
          <View>
            <Text>Email</Text>
            <TextInput keyboardType="email-address"  />
          </View>
          
          <View>
            <Text>Password</Text>
            <View>
              <TextInput/>
              <FontAwesome/>
            </View>
        
        </View>
        </View>
        <TouchableOpacity>
          <Text>Join</Text>
        </TouchableOpacity>

        <View>
          <View>

          </View>
          <Text>
            OR
          </Text>
          <View>
            
          </View>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>    
  );
}
