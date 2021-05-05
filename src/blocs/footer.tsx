import * as fa from '@fortawesome/free-solid-svg-icons'
import * as fab from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Contact () {
  return (
    <div className="flex items-center justify-center mb-4">
      <a className="mx-2">
        <FontAwesomeIcon icon={fab.faDiscord} style={{ width: '30px', height: '30px', color: 'white' }} />
      </a>
      <a className="mx-2">
        <FontAwesomeIcon icon={fab.faTwitter} style={{ width: '30px', height: '30px', color: 'white' }} />
      </a>
      <a className="mx-2">
        <FontAwesomeIcon icon={fa.faEnvelope} style={{ width: '30px', height: '30px', color: 'white' }} />
      </a>
    </div>
  )
}

function Conditions () {
  return (
    <div>
      <p className="text-white text-center text-xxs md:text-xs mb-3">
        <a className="text-gray-200 underline">
       FAQ { ' ' }
        </a>
        <span>
        - { ' ' }
        </span>
        <a className="text-gray-200 underline">
      Privacy{ ' ' }
        </a>
        <span>
        - { ' ' }
        </span>
        <a className="text-gray-200 underline">
         Pricing
        </a>
      </p>
      <p className="text-center text-sm text-gray-200">
        © 2021 nextjs-tailwind-boilerplate.com
      </p>
    </div>
  )
}

export function Footer () {
  return (
    <footer className="w-full py-4 md:py-6 flex flex-col items-center">
      <div className="w-4/5 border-b-1 mb-6 border-gray-500"></div>
      <Contact />
      <Conditions />
    </footer>
  )
}