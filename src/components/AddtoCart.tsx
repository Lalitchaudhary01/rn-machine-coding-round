import React from 'react'
import { View, Text, Button } from 'react-native'

const AddtoCart = () => {
  const [cartItems, setCartItems] = React.useState([]);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cartVisible, setCartVisible] = React.useState(false);
  const [itemCount, setItemCount] = React.useState(0);
  const [cartBadgeCount, setCartBadgeCount] = React.useState(0);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    setTotalPrice(totalPrice + item.price);
    setItemCount(itemCount + 1);
    setCartBadgeCount(cartBadgeCount + 1);
  }

  const removeFromCart = (item) => {
    const updatedCartItems = cartItems.filter(
      cartItem => cartItem.id !== item.id
    );
    setCartItems(updatedCartItems);
    setTotalPrice(totalPrice - item.price);
    setItemCount(itemCount - 1);
    setCartBadgeCount(cartBadgeCount - 1);
  }

  const toggleCartVisibility = () => {
    setCartVisible(!cartVisible);
  }

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
    setItemCount(0);
    setCartBadgeCount(0);
  }

  const items = [
    { id: 1, name: 'Item 1', price: 10 },
    { id: 2, name: 'Item 2', price: 20 },
    { id: 3, name: 'Item 3', price: 30 },
  ]

  return (
    <View>
      <Text>Add to Cart</Text>

      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name} - ${item.price}</Text>
          <Button
            title="Add to Cart"
            onPress={() => addToCart(item)}
          />
        </View>
      ))}

      <Button
        title={`Cart (${cartBadgeCount})`}
        onPress={toggleCartVisibility}
      />

      {cartVisible && (
        <View>
          {cartItems.map(cartItem => (
            <View key={cartItem.id}>
              <Text>
                {cartItem.name} - ${cartItem.price}
              </Text>
              <Button
                title="Remove"
                onPress={() => removeFromCart(cartItem)}
              />
            </View>
          ))}

          <Text>Total: ${totalPrice}</Text>

          <Button
            title="Clear Cart"
            onPress={clearCart}
          />
        </View>
      )}
    </View>
  )
}

export default AddtoCart