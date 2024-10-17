import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, ShoppingBag, Tag, Users } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="space-y-16 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">Welcome to Our eCommerce Store</h1>
        <p className="text-xl text-muted-foreground max-w-prose mx-auto">
          Discover amazing products at unbeatable prices. Start shopping now!
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/shop">
              Shop Now
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/login">Sign In</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((product) => (
            <Card key={product}>
              <CardHeader>
                <CardTitle>Featured Product {product}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-square bg-muted rounded-md mb-4"></div>
                <p>This is a brief description of the featured product.</p>
              </CardContent>
              <CardFooter>
                <Button asChild>
                  <Link href={`/shop/product-${product}`}>View Details</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Shop by Category</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {['Electronics', 'Clothing', 'Home & Garden'].map((category) => (
            <Card key={category}>
              <CardHeader>
                <CardTitle>{category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-muted rounded-md"></div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href={`/shop/category/${category.toLowerCase().replace(' & ', '-')}`}>
                    Browse {category}
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      {/* About Us */}
      <section className="bg-muted py-16 px-4 rounded-lg">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl font-bold">About Our Store</h2>
          <p className="text-lg">
            We're passionate about bringing you the best products at the best prices. Our curated selection ensures
            quality and value in every purchase.
          </p>
          <div className="flex justify-center gap-8 pt-4">
            <div className="flex flex-col items-center">
              <ShoppingBag className="h-12 w-12 text-primary mb-2" />
              <h3 className="font-semibold">Wide Selection</h3>
              <p className="text-sm text-muted-foreground">Thousands of products</p>
            </div>
            <div className="flex flex-col items-center">
              <Tag className="h-12 w-12 text-primary mb-2" />
              <h3 className="font-semibold">Great Prices</h3>
              <p className="text-sm text-muted-foreground">Competitive pricing</p>
            </div>
            <div className="flex flex-col items-center">
              <Users className="h-12 w-12 text-primary mb-2" />
              <h3 className="font-semibold">Customer Service</h3>
              <p className="text-sm text-muted-foreground">24/7 support</p>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="max-w-xl mx-auto text-center space-y-4">
        <h2 className="text-3xl font-bold">Stay Updated</h2>
        <p className="text-muted-foreground">
          Subscribe to our newsletter for the latest products, deals, and more!
        </p>
        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
          <Input type="email" placeholder="Enter your email" className="flex-grow" />
          <Button type="submit">Subscribe</Button>
        </form>
      </section>
    </div>
  )
}