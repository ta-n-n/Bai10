import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <View style={styles.header}>
          <View style={{ flex: 1 }}>
            <Text style={styles.greeting}>Hello 👋</Text>
            <Text style={styles.username}>Christie Doe</Text>
          </View>
          <Image source={require('../bai10/Images/Ellipse 6.png')} style={styles.profileImage} />
        </View>

        <View style={styles.insightsContainer}>
        <TouchableOpacity style={[styles.card, { backgroundColor: '#fafcfc' }]}  onPress={() => navigation.navigate('Scan')}>
          <View style={[styles.iconContainer, { backgroundColor: '#eae1fa' }]}>
            <Image source={require('../bai10/Images/3.png')} style={styles.icon} />
          </View>
          <Text style={styles.cardTitle}>Scan new</Text>
          <Text style={styles.cardSubtitle}>Scanned 483</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: '#fafcfc' }]}>
          <View style={[styles.iconContainer, { backgroundColor: '#fae1e1' }]}>
          <Entypo name="warning" size={24} color="red" />
          </View>
          <Text style={styles.cardTitle}>Counterfeits</Text>
          <Text style={styles.cardSubtitle}>Counterfeited 32</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: '#fafcfc' }]}>
          <View style={[styles.iconContainer, { backgroundColor: '#cafce1' }]}>
            <Image source={require('../bai10/Images/Group 158.png')} style={styles.icon} />
          </View>
          <Text style={styles.cardTitle}>Success</Text>
          <Text style={styles.cardSubtitle}>Checkouts 8</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.card, { backgroundColor: '#fafcfc' }]}>
          <View style={[styles.iconContainer, { backgroundColor: '#dbf2ff' }]}>
            <Image source={require('../bai10/Images/Group 151.png')} style={styles.icon} />
          </View>
          <Text style={styles.cardTitle}>Directory</Text>
          <Text style={styles.cardSubtitle}>History 26</Text>
        </TouchableOpacity>
      </View>


        <View style={styles.exploreMore}>
          <Text style={styles.exploreText}>Explore More</Text>
          <Icon name="arrow-forward" size={30} color="#000" />
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.imageScroll}>
          <Image source={require('../bai10/Images/Rectangle 31.png')} style={styles.exploreImage} />
          <Image source={require('../bai10/Images/Rectangle 45.png')} style={styles.exploreImage} />
          <Image source={require('../bai10/Images/aaaa.png')} style={styles.exploreImage} />
        </ScrollView>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Home')}>
          <View style={styles.selectedIconBackground}>
            <Image source={require('../bai10/Images/Group 152.png')} style={styles.footerIcon} resizeMode="contain"/>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image source={require('../bai10/Images/Group 153.png')} style={styles.footerIconGray} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer} onPress={() => navigation.navigate('Scan')}>
          <Image source={require('../bai10/Images/Vector.png')} style={styles.footerIconGray} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image source={require('../bai10/Images/Group 154.png')} style={styles.footerIconGray} resizeMode="contain"/>
        </TouchableOpacity>
        <TouchableOpacity style={styles.footerIconContainer}>
          <Image source={require('../bai10/Images/Group 161.png')} style={styles.footerIconGray} resizeMode="contain"/>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  username: {
    fontSize: 18,
    color: '#555',
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 15,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  insightsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    borderRadius: 15,
    width: '48%',
    height: 180,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 60,
    height: 60,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  icon: {
    width: 24,
    height: 24,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  cardSubtitle: {
    fontSize: 14,
    color: '#888',
    textAlign: 'center',
    marginTop: 5,
  },
  exploreMore: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 15,
  },
  exploreText: {
    fontSize: 18,
    fontWeight: '500',
  },
  imageScroll: {
    marginTop: 10,
    marginBottom: 20,
  },
  exploreImage: {
    width: 130,
    height: 200,
    borderRadius: 10,
    marginRight: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 5,
    right: 5,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#fff',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    shadowColor: '#000',
    shadowOpacity: 0.25, 
    shadowOffset: { width: 0, height: -1 },
    shadowRadius: 8, 
    elevation: 15, 
    borderTopWidth: 3, 
    borderTopColor: '#e0e0e0', 
  },
  
  footerIconContainer: {
    alignItems: 'center',
  },
  selectedIconBackground: {
    backgroundColor: '#E7F4FF',
    borderRadius: 15,
    padding: 15,
  },
  footerIcon: {
    width: 24,
    height: 24,
  },
  footerIconGray: {
    width: 24,
    height: 24,
  },
});
