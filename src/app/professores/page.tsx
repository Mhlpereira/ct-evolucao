import { Card, Dropdown, DropdownItem } from 'flowbite-react'
import Image from 'next/image'

export default function ProfessoresPage() {
  return (
    <>
      <div>Professores</div>
      <a href="#" className="group relative block bg-black">
        <img
          alt=""
          src="./wellinton.jpg"
          className="absolute inset-0 h-40 w-40 object-cover opacity-75 transition-opacity group-hover:opacity-50"
        />

        <div className="relative p-4 sm:p-6 lg:p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
            Jiu-jitsu
          </p>

          <p className="text-xl font-bold text-white sm:text-2xl">Wellington</p>

          <div className="mt-32 sm:mt-48 lg:mt-64">
            <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
              <p className="text-sm text-white">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
                perferendis hic asperiores quibusdam quidem voluptates
                doloremque reiciendis nostrum harum. Repudiandae?
              </p>
            </div>
          </div>
        </div>
      </a>
    </>
  )
}