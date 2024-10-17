'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Users, LayoutDashboard, LogOut } from 'lucide-react'

export function AdminNavbar() {
  const pathname = usePathname()

  return (
    <nav className="bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/admin" className="text-xl font-bold">
            Admin Dashboard
          </Link>
          <div className="flex space-x-4">
            <NavLink href="/admin" active={pathname === '/admin'}>
              <LayoutDashboard className="w-4 h-4 mr-2" />
              Dashboard
            </NavLink>
            <NavLink href="/admin/users" active={pathname === '/admin/users'}>
              <Users className="w-4 h-4 mr-2" />
              User Management
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