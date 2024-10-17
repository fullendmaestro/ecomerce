'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { ShoppingBag, Home, LogOut } from 'lucide-react'
import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { CartDialog } from './CartDialog'

export function ShopperNavbar() {
  const pathname = usePathname()
  const [isCartOpen, setIsCartOpen] = useState(false)

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/shop" className="text-xl font-bold">
            eCommerce Shop
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/shop" active={pathname === '/shop'}>
              <Home className="w-4 h-4 mr-2" />
              Home
            </NavLink>
            <Dialog open={isCartOpen} onOpenChange={setIsCartOpen}>
              <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                  <ShoppingBag className="w-4 h-4 mr-2" />
                  Cart
                </Button>
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Your Cart</DialogTitle>
                </DialogHeader>
                <CartDialog onClose={() => setIsCartOpen(false)} />
              </DialogContent>
            </Dialog>
            <Button variant="ghost" size="sm">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}

function NavLink({ href, children, active }) {
  return (
    <Link
      href={href}
      className={`flex items-center px-3 py-2 rounded-md text-sm font-medium ${
        active
          ? 'bg-primary text-primary-foreground'
          : 'text-foreground hover:bg-muted'
      }`}
    >
      {children}
    </Link>
  )
}