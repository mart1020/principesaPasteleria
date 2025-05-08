import React from 'react'

const Cart = ({ cart, updateQuantity, removeItem }) => {
  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
  const message = encodeURIComponent(
    cart.map(item => `🍰 ${item.name} x${item.quantity} - $${item.price * item.quantity}`).join('\n') +
    `\n\nTotal: $${total}`
  )
  const whatsappLink = `https://wa.me/5215555555555?text=${message}`

  if (cart.length === 0) return <p className="text-gray-500">Tu carrito está vacío</p>

  return (
    <div className="border-t pt-4">
      <h2 className="text-2xl font-bold mb-2">Carrito</h2>
      <ul>
        {cart.map(item => (
          <li key={item.id} className="mb-2 flex justify-between items-center">
            <span>{item.name} (x{item.quantity})</span>
            <div>
              <input
                type="number"
                value={item.quantity}
                min="1"
                onChange={e => updateQuantity(item.id, parseInt(e.target.value))}
                className="w-16 mr-2 border rounded px-1"
              />
              <button onClick={() => removeItem(item.id)} className="text-red-500">Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
      <p className="font-semibold mt-2">Total: ${total}</p>
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600">
        Enviar pedido por WhatsApp
      </a>
    </div>
  )
}

export default Cart