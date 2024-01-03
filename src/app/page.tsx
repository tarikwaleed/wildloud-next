'use client'
import { Link } from '@chakra-ui/next-js'
import SideNav from './components/sidenav'
import CashoutCard from './components/cashout_card'

export default function Page() {
  return (
    // <Link href='/about' color='blue.400' _hover={{ color: 'blue.500' }}>
    //   About
    // </Link>
    <div>
      <SideNav></SideNav>
    </div>

  )
}