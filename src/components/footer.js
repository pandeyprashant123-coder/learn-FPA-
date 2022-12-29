import * as React from "react"
import { Link } from "gatsby"

import Logo from "../res/fpa.svg";

const Footer = ({ siteTitle }) => {

  return <footer aria-label="Site Footer" class="bg-gray-100">
    <div
      class="relative mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8"
    >
      <div class="lg:flex lg:items-end lg:justify-between">
        <Link class="flex justify-center text-sm text-gray-500 lg:justify-start" to="https://about.fairfieldprogramming.org">
          <img class="h-10" src={Logo} alt="FPA Vault Logo" />
        </Link>
        <p class="text-center text-sm text-gray-500 lg:text-right">
          Copyright &copy; {new Date().getFullYear()}. All rights reserved.
        </p>
      </div>
    </div>
  </footer>

}

export default Footer
