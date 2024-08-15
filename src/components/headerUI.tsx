import {
  Navbar,
  NavbarBrand,
  NavbarToggle,
  NavbarCollapse,
  NavbarLink,
  Dropdown,
} from 'flowbite-react'
import Link from 'next/link'

export default function HeaderUI() {
  return (
    <Navbar fluid rounded className="bg-slate-500">
      <NavbarBrand>
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          CT-EVOLUCAO
        </span>
      </NavbarBrand>
      <NavbarToggle />
      <NavbarCollapse>
        <NavbarLink as={Link} href="/" active>
          Home
        </NavbarLink>
        <NavbarLink as={Link} href="/modalidades">
          Modalidades
        </NavbarLink>
        <NavbarLink as={Link} href="/professores">
          Professores
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Pricing
        </NavbarLink>
        <NavbarLink as={Link} href="#">
          Contato
        </NavbarLink>
      </NavbarCollapse>
    </Navbar>
  )
}
