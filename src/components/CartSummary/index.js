// Write your code here
import Popup from 'reactjs-popup'

import CartContext from '../../context/CartContext'
import Payment from '../Payment'

import './index.css'
import 'reactjs-popup/dist/index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const cartListLength = cartList.length
      let total = 0
      cartList.forEach(eachCartItem => {
        total += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="order-total-value">
              <span className="order-total-label">Order Total:</span> Rs {total}
              /-
            </h1>
            <p className="total-items">{cartListLength} Items in cart</p>
            <button type="button" className="checkout-button d-lg-none">
              Checkout
            </button>
            <Popup
              modal
              trigger={
                <button
                  type="button"
                  className="trigger-button checkout-button d-sm-none"
                >
                  Checkout
                </button>
              }
            >
              <Payment />
            </Popup>
          </div>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
