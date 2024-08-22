import {
  Footer,
  FooterBrand,
  FooterTitle,
  FooterLinkGroup,
  FooterLink,
  FooterDivider,
  FooterCopyright,
  FooterIcon,
} from 'flowbite-react'
import {
  BsFacebook,
  BsInstagram,
  BsTwitter,
  BsGithub,
  BsDribbble,
  BsLinkedin,
  BsDiscord,
} from 'react-icons/bs'

export default function FooterUI() {
  return (
    <Footer className='inset-x-0 bottom-0'>
      <div className="w-full h-8 bg-slate-600 sm:flex sm:items-center sm:justify-between ">
        <FooterCopyright
          href="https://www.linkedin.com/in/m%C3%A1rio-henrique/"
          by="Mário Henrique™"
          year={2024}
        />
        <div className="mt-4 flex mr-3 space-x-4 sm:mt-0 sm:justify-center">
          <FooterIcon
            href="https://www.linkedin.com/in/m%C3%A1rio-henrique/"
            target="_blank"
            icon={BsLinkedin}
          />
          <FooterIcon
            href="https://github.com/Mhlpereira"
            target="_blank"
            icon={BsGithub}
          />
        </div>
      </div>
    </Footer>
  )
}
