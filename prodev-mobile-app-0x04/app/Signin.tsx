import { styles } from "@/styles/_mainstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.logoContainer}>
          <Ionicons name="arrow-back" size={25}/>
          <Image source={require('@/assets/images/Logo.png')}/>
        </View >
        
        <View style={{flex:1, padding:20}}>
          <Text style={styles.titleSubText}>Sign in to your</Text>
        <Text style={styles.titleSubText}>Account</Text>
        <Text style={styles.titleSubText}>Enter your email and password to sign in.</Text>

        <View style={styles.container}>
          
          <View>
            <Text style={styles.titleSubText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.titleText} />
          </View>
          
          <View style={{ marginTop: 20 }}>
            <Text style={styles.titleSubText}>Password</Text>
            <View style={styles.container}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
        
        </View>
        <Text style={styles.titleText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.buttonPrimary}>
          <Text style={styles.buttonPrimary}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.container}>
          <View
            style={styles.container}
          ></View>
          <Text
            style={styles.titleText}
          >
            OR
          </Text>
          <View
            style={styles.container}
          ></View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.buttonPrimary}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.titleSubText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonPrimary}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.titleSubText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.titleSubText}>Don't have an account?</Text>
          <Text style={styles.titleSubText}>Join now</Text>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>    
  );
}
