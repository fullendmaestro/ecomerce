'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"

export default function ShopPage() {
  const [products, setProducts] = useState([
    { id: 1, name: 'Product 1', price: 19.99, description: 'This is product 1' },
    { id: 2, name: 'Product 2', price: 29.99, description: 'This is product 2' },
    { id: 3, name: 'Product 3', price: 39.99, description: 'This is product 3' },
  ])

  const addToCart = (product) => {
    // Here you would typically update the cart state
    console.log(`Added ${product.name} to cart`)
    toast({
      title: "Product added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Available Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card key={product.id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{product.description}</p>
              <p className="font-bold mt-2">${product.price.toFixed(2)}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => addToCart(product)}>Add to Cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}