'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Package, PlusCircle, LayoutDashboard, LogOut } from 'lucide-react'

export function SellerNavbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/seller" className="text-xl font-bold">
            Seller Dashboard
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/seller" active={pathname === '/seller'}>
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </NavLink>
            <NavLink href="/seller/products" active={pathname === '/seller/products'}>
              <Package className="w-4 h-4 mr-2" />
              Manage Products
            </NavLink>
            <NavLink href="/seller/create-product" active={pathname === '/seller/create-product'}>
              <PlusCircle className="w-4 h-4 mr-2" />
              Create Product
            </NavLink>
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