import Image from 'next/image'
import Link from 'next/link'

export default function HeaderUI() {
  return (
    <nav className='w-full h-16 bg-white fixed border-b border-slate-200 shadow-inner p-0 '>
        <div className='flex items-center mx-auto'>
          <Image src='https://res.cloudinary.com/dk3stwpr5/image/upload/v1724384648/m0u1mzxibjkrbo0mbjue.png' width={60} height={60} alt='logo' />
          <span>teste</span>  
        </div>
    </nav>
  )
}
