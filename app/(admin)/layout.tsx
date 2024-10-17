import { AdminNavbar } from '@/components/AdminNavbar'

export default function AdminLayout({ children }) {
  return (
    <>
      <AdminNavbar />
      <main className="container mx-auto px-4 py-8">
        {children}
      </main>
    </>
  )
}