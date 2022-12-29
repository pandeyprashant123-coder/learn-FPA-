import * as React from "react"
import { Link } from "gatsby"

import Logo from "../res/logo.svg";
import Search from "../components/search"

const Header = ({  }) => (
  <header aria-label="Site Header" class="shadow-sm">
    <div class="mx-auto max-w-screen-xl p-2 flex">
      <div class="flex items-center justify-left gap-4 lg:gap-10 w-full">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-md font-medium flex md:gap-8"
        >
          <Link class="text-gray-500 no-underline whitespace-nowrap" activeClassName="no-underline whitespace-nowrap" to="/courses">Courses ▾</Link>
        </nav>
      </div>
      <div class="flex items-center justify-center w-full">
        <Link class="m-0 p-0" to="/">
          <img class="h-12 m-0" src={Logo} alt="The Fairfield Programming Association Logo" />
        </Link>
      </div>
      <div class="flex items-center justify-end gap-4 lg:gap-10 w-full">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-md font-medium flex md:gap-8"
        >
          <Search
            width="w-[14rem]"
            searchTerm={"test"}
            setSearchTerm={() => {}}
          />
        </nav>
      </div>
    </div>
  </header>

)

export default Header
