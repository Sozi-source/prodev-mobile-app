import { styles } from "@/styles/joinstyle";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";


export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={styles.container}>
          <Ionicons name="arrow-back" size={25}/>
          <Image source={require('@/assets/images/icon.png')}/>
        </View >
        
        <View style={{flex:1, padding:20}}>
          <Text style={styles.titleTextGroup}>Join</Text>
        <Text style={styles.titleTextGroup}>Account</Text>
        <Text style={styles.titleTextGroup}>Enter your email and password to Join.</Text>

        <View style={styles.formGroup}>
          
          <View>
            <Text style={styles.titleTextGroup}>Email</Text>
            <TextInput keyboardType="email-address" style={styles.titleText} />
          </View>
          
          <View style={{ marginTop: 20 }}>
            <Text style={styles.titleTextGroup}>Password</Text>
            <View style={styles.titleTextGroup}>
              <TextInput style={{ flex: 1 }} />
              <FontAwesome name="eye-slash" size={24} color="#7E7B7B" />
            </View>
        
        </View>
        </View>
        <TouchableOpacity style={styles.primaryButton}>
          <Text style={styles.buttonText}>Join</Text>
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
        </View>
      </SafeAreaView>
    </SafeAreaProvider>    
  );
}
