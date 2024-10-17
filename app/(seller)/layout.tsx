import { SellerNavbar } from '@/components/SellerNavbar'

export default function SellerLayout({ children }) {
  return (
    <>
      <SellerNavbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </>
  )
}