import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Import cart items JSON
import cartItemsData from '../bai10/products.json';

const imageMapping = {
    "Scan Screen.png": require('../bai10/Images/Scan Screen.png'),
    "Rectangle 31.png": require('../bai10/Images/Rectangle 31.png'),
    "Rectangle 45.png": require('../bai10/Images/Rectangle 45.png'),
  };

export default function YourCart() {
  const navigation = useNavigation();
  const [cartItems, setCartItems] = useState([]);
  const [selectedIcon, setSelectedIcon] = useState('Home');

  // Load the cart items from JSON file
  useEffect(() => {
    setCartItems(cartItemsData);
  }, []);

    // Calculate total amount
    const totalAmount = cartItems.reduce((total, item) => {
        const itemPrice = parseInt(item.price.replace('₹', '').trim());
        return total + itemPrice * item.quantity;
    }, 0);

    // Update quantity in cart
    const updateQuantity = (id, action) => {
        setCartItems((prevItems) => 
            prevItems.map(item => 
                item.id === id 
                    ? { ...item, quantity: action === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 1) } 
                    : item
            )
        );
    };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Icon name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>

      {/* Cart Title */}
      <Text style={styles.title}>Your Cart 👍</Text>

      {/* Cart Items */}
      <ScrollView style={styles.cartItems}>
        {cartItems.map((item) => (
            <CartItem
                key={item.id}
                imageUri={imageMapping[item.imageUri]} 
                brand={item.brand}
                productName={item.productName}
                price={item.price}
                quantity={item.quantity}
                updateQuantity={updateQuantity} // Thêm prop updateQuantity
                id={item.id} // Thêm prop id
                />
        ))}
      </ScrollView>

      {/* Total and Checkout */}
      <View style={styles.totalContainer}>
        <Text style={styles.totalText}>Total</Text>
        <Text style={styles.totalAmount}>₹ {totalAmount}</Text>
      </View>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutButtonText}>Proceed to checkout</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.footerIconContainer}
          onPress={() => {
            setSelectedIcon('Home');
            navigation.navigate('Home');
          }}
        >
          <View style={selectedIcon === 'Home' ? styles.selectedIconBackground : null}>
            <Image
              source={require('../bai10/Images/Group 152.png')}
              style={[styles.footerIcon, selectedIcon === 'Home' && styles.footerIconActive]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIconContainer}
          onPress={() => setSelectedIcon('Cart')}
        >
          <View style={selectedIcon === 'Cart' ? styles.selectedIconBackground : null}>
            <Image
              source={require('../bai10/Images/Group 153.png')}
              style={[styles.footerIcon, selectedIcon === 'Cart' && styles.footerIconActive]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIconContainer}
          onPress={() => {
            setSelectedIcon('Scan');
            navigation.navigate('Scan');
          }}
        >
          <View style={selectedIcon === 'Scan' ? styles.selectedIconBackground : null}>
            <Image
              source={require('../bai10/Images/Vector.png')}
              style={[styles.footerIcon, selectedIcon === 'Scan' && styles.footerIconActive]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIconContainer}
          onPress={() => setSelectedIcon('Favorite')}
        >
          <View style={selectedIcon === 'Favorite' ? styles.selectedIconBackground : null}>
            <Image
              source={require('../bai10/Images/Group 154.png')}
              style={[styles.footerIcon, selectedIcon === 'Favorite' && styles.footerIconActive]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.footerIconContainer}
          onPress={() => setSelectedIcon('Profile')}
        >
          <View style={selectedIcon === 'Profile' ? styles.selectedIconBackground : null}>
            <Image
              source={require('../bai10/Images/Group 161.png')}
              style={[styles.footerIcon, selectedIcon === 'Profile' && styles.footerIconActive]}
              resizeMode="contain"
            />
          </View>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const CartItem = ({ imageUri, brand, productName, price, quantity, updateQuantity, id }) => (
    <View style={styles.cartItem}>
        <Image source={imageUri} style={styles.productImage} />
        <View style={styles.productDetails}>
            <Text style={styles.productBrand}>{brand}</Text>
            <Text style={styles.productName}>{productName}</Text>
            <Text style={styles.productPrice}>{price}</Text>
        </View>
        <View style={styles.quantityControls}>
            <TouchableOpacity onPress={() => updateQuantity(id, 'decrement')}>
                <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => updateQuantity(id, 'increment')}>
                <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
        </View>
    </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
    paddingHorizontal: 15,
    paddingTop: 40,
    paddingBottom: 150,
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 8,
    zIndex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'left',
    marginVertical: 20,
    paddingHorizontal: 15,
    color: '#333',
    marginTop: 70,
  },
  cartItems: {
    flex: 1,
    marginBottom: 20,
  },
  cartItem: {
    flexDirection: 'row',
    backgroundColor: '#FAFAFA',
    borderRadius: 15,
    marginVertical: 10,
    padding: 15,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  productImage: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
  productDetails: {
    flex: 1,
    marginLeft: 15,
  },
  productBrand: {
    fontSize: 12,
    color: '#888',
  },
  productName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productPrice: {
    fontSize: 14,
    color: '#FF6347',
  },
  quantityControls: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
    borderRadius: 12,
    padding: 5,
  },
  quantityButton: {
    fontSize: 18,
    color: '#FF6347',
    paddingHorizontal: 8,
  },
  quantity: {
    fontSize: 16,
    marginHorizontal: 5,
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 20,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 2,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalAmount: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF6347',
  },
  checkoutButton: {
    backgroundColor: '#FF8C69',
    padding: 15,
    borderRadius: 10,
    marginVertical: 10,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
    elevation: 3,
  },
  checkoutButtonText: {
    fontSize: 18,
    color: '#fff',
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 25,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: -3 },
    shadowRadius: 5,
    elevation: 10,
  },
  footerIconContainer: {
    alignItems: 'center',
  },
  footerIcon: {
    width: 24,
    height: 24,
    tintColor: '#888', 
  },
  footerIconActive: {
    tintColor: '#007AFF', 
  },
  selectedIconBackground: {
    backgroundColor: '#E0F7FF',
    borderRadius: 15,
    padding: 8,
  },
});
