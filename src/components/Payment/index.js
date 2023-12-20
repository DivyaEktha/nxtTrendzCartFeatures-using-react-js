import {useState} from 'react'

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [isConfirmButtonDisabled, setIsConfirmButtonDisabled] = useState(true)
  const [successMessage, setSuccessMessage] = useState('')

  const handlePaymentMethodChange = e => {
    const selectedMethod = e.target.value
    setPaymentMethod(selectedMethod)

    // Enable Confirm Order button only if Cash on Delivery is selected
    setIsConfirmButtonDisabled(selectedMethod !== 'Cash on Delivery')
  }

  const handleConfirmOrder = () => {
    // Add logic to handle the order confirmation, e.g., send the order to the server

    // Display success message
    setSuccessMessage('Your order has been placed successfully')
  }

  return (
    <div className="payment-popup">
      <h2>Select Payment Method</h2>
      <form className="popup-card">
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Card"
            disabled
            checked={paymentMethod === 'Card'}
            onChange={handlePaymentMethodChange}
          />
          Card
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Net Banking"
            disabled
            checked={paymentMethod === 'Net Banking'}
            onChange={handlePaymentMethodChange}
          />
          Net Banking
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="UPI"
            disabled
            checked={paymentMethod === 'UPI'}
            onChange={handlePaymentMethodChange}
          />
          UPI
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Wallet"
            disabled
            checked={paymentMethod === 'Wallet'}
            onChange={handlePaymentMethodChange}
          />
          Wallet
        </label>
        <label>
          <input
            type="radio"
            name="paymentMethod"
            value="Cash on Delivery"
            checked={paymentMethod === 'Cash on Delivery'}
            onChange={handlePaymentMethodChange}
          />
          Cash on Delivery
        </label>
        <div>
          <button
            type="button"
            onClick={handleConfirmOrder}
            disabled={isConfirmButtonDisabled}
          >
            Confirm Order
          </button>
        </div>
      </form>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </div>
  )
}

export default Payment
