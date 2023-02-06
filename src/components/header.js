import * as React from "react"
import { Link, navigate } from "gatsby"

import Logo from "../res/logo.svg";
import Search from "../components/search"

const Header = ({  }) => {

  const [ search, setSearch ] = React.useState('');

  return <header aria-label="Site Header" class="shadow-sm sticky top-0 bg-white opacity-90">
    <div class="mx-auto max-w-screen-xl p-2 flex">
      <div class="flex items-center justify-left gap-4 lg:gap-10 w-full justify-around">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-md font-medium flex md:gap-8"
        >
          <Link class="text-gray-500 no-underline whitespace-nowrap" activeClassName="no-underline whitespace-nowrap" to="/courses">Courses ▾</Link>
          <Link class="text-gray-500 no-underline whitespace-nowrap" activeClassName="no-underline whitespace-nowrap" to="/articles">Articles ▾</Link>
          <Link class="text-gray-500 no-underline whitespace-nowrap" activeClassName="no-underline whitespace-nowrap" to="https://about.fairfieldprogramming.org/support/">Support</Link>
        </nav>
      </div>
      <div class="flex items-center justify-center w-full">
        <Link class="m-0 p-0" to="/">
          <img class="h-12 m-0" src={Logo} alt="The Fairfield Programming Association Logo" />
        </Link>
      </div>
      <div class="flex items-center justify-around gap-4 lg:gap-10 w-full">
        <nav
          aria-label="Site Nav"
          class="w-min gap-4 text-md font-medium flex md:gap-8"
        >
          <Search
            width="w-[14rem]"
            placeholder="Search for courses, articles, and more"
            searchTerm={search}
            setSearchTerm={setSearch}
            onSearchEnter={() => {
              navigate(`/search?q=` + encodeURIComponent(search) + `&c=courses`)
            }}
          />
        </nav>
      </div>
    </div>
  </header>

}

export default Header
