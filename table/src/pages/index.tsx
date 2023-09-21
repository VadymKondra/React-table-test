import Image from 'next/image'
import { Inter } from 'next/font/google'
import { TableComponent } from '@/components/Table/tableComponent/tableComponent'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h2>Referals - 345</h2>
      <TableComponent/>
    </div>

  )
}
