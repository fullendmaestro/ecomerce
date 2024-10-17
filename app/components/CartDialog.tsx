'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Minus, Plus, Trash2 } from 'lucide-react'

export function CartDialog({ onClose }) {
  const [cart, setCart] = useState([
    { id: 1, name: 'Product 1', price: 19.99, quantity: 2 },
    { id: 2, name: 'Product 2', price: 29.99, quantity: 1 },
  ])

  const updateQuantity = (id, change) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item
    ).filter(item => item.quantity > 0))
  }

  const removeItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <div className="space-y-4">
      {cart.map(item => (
        <div key={item.id} className="flex items-center justify-between">
          <div>
            <h3 className="font-medium">{item.name}</h3>
            <p className="text-sm text-muted-foreground">${item.price.toFixed(2)}</p>
          </div>
          <div className="flex items-center space-x-2">
            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, -1)}>
              <Minus className="h-4 w-4" />
            </Button>
            <Input
              type="number"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value) - item.quantity)}
              className="w-16 text-center"
            />
            <Button variant="outline" size="icon" onClick={() => updateQuantity(item.id, 1)}>
              <Plus className="h-4 w-4" />
            </Button>
            <Button variant="destructive" size="icon" onClick={() => removeItem(item.id)}>
              <Trash2 className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      <div className="flex justify-between items-center font-medium">
        <span>Total:</span>
        <span>${total.toFixed(2)}</span>
      </div>
      <div className="flex justify-end space-x-2">
        <Button variant="outline" onClick={onClose}>Continue Shopping</Button>
        <Button>Checkout</Button>
      </div>
    </div>
  )
}