import Image from 'next/image'
import Link from 'next/link'
import { DropdownMenu, DropdownMenuItem, DropdownMenuTrigger , DropdownMenuContent} from '../ui/dropdown-menu'

export default function HeaderUI() {
  const dropdownItem = [
      {title: 'Muy Thay', url: '/modalidades/muythay'},
      {title: 'Jiu jitsu', url: '/modalidades/jiujitsu'},
      {title: 'Judo', url: '/modalidades/judo'},
      {title: 'Kung fu', url: '/modalidades/kungfu'},
      {title: 'Personal fight', url: '/modalidades/personalf'},
  ]


  return (
    <nav className="w-full h-16 bg-white border-b border-slate-200 shadow-inner p-0 ">
      <div className=" py-1 px-7 flex justify-between items-center">
        <div className='flex text-2xl items-center gap-4'>         
            <Image
              src="https://res.cloudinary.com/dk3stwpr5/image/upload/v1724384648/m0u1mzxibjkrbo0mbjue.png"
              width={60}
              height={60}
              alt="logo"
            />
            <span className='font-bold'>Evolução</span>
        </div>
        <div className='space-x-4 items-center justify-center'>
          <Link href={`/`}>Inicio</Link>
          <Link href={`/professores`}>Professores</Link>
          <DropdownMenu>
            <DropdownMenuTrigger>Modalidades</DropdownMenuTrigger>
            <DropdownMenuContent className='cursor-pointer'>
              {dropdownItem.map((item: any, index: number) => 
              <Link href={`${item.url}`} key={index}>
              <DropdownMenuItem>{item.title}</DropdownMenuItem>
              </Link>
              )}
            </DropdownMenuContent>
          </DropdownMenu>
          <Link href={`/planos`}>Planos</Link>
          <Link href={`/`}>Log in</Link>
        </div>
      </div>
    </nav>
  )
}
