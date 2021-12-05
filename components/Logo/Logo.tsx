import Image from 'next/image'
import logo from '../../public/wiss-logo.svg'

export default function Logo() {
  return <Image alt='Company Logo' src={logo} layout='responsive' />
}
