import { styles } from "@/styles/_join";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Ionicons name="arrow-back" size={25}/>
          <Image source={require('@/assets/images/logo.png')}/>
        </View >
        
        <View style={{flex:1, padding:20}}>
          <Text style={styles.signupTitleText}>Sign in to your</Text>
        <Text style={styles.signupTitleText}>Account</Text>
        <Text style={styles.signupTitleText}>Enter your email and password to sign in.</Text>

        <View style={styles.formGroup}>
          
          <View>
            <Text style={styles.titleText}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.titleText} />
          </View>
          
          <View style={{ marginTop: 20 }}>
            <Text style={styles.titleText}>Password</Text>
            <View style={styles.container}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
        
        </View>
        <Text style={styles.forgotPasswordText}>Forgot password?</Text>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Sign in</Text>
        </TouchableOpacity>

        <View style={styles.dividerGroup}>
          <View
            style={styles.divider}
          ></View>
          <Text
            style={styles.dividerText}
          >
            OR
          </Text>
          <View
            style={styles.divider}
          ></View>
        </View>

        <View style={styles.container}>
          <TouchableOpacity style={styles.primaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/google.png")} />
              <Text style={styles.buttonText}>
                Continue with Google
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity style={styles.primaryButton}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                gap: 5,
              }}
            >
              <Image source={require("@/assets/images/facebook.png")} />
              <Text style={styles.dividerText}>
                Continue with Facebook
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.container}>
          <Text style={styles.subText}>Don't have an account?</Text>
          <Text style={styles.titleText}>Join now</Text>
        </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>    
  );
}
