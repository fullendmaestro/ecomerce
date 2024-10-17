import { ShopperNavbar } from '@/components/ShopperNavbar'

export default function ShopperLayout({ children }) {
  return (
    <>
      <ShopperNavbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </>
  )
}