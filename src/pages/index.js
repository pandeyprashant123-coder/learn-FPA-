import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Course from "../components/course"

function IndexPage() {

  const courses = require('../../data/courses.json');

  return (
    <Layout>
      <section>
        <div
          class="mx-auto max-w-screen-xl px-4 py-48 lg:flex  lg:items-center"
        >
          <div class="mx-auto max-w-xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">
              Learn to code, for free, in ten days or less.
            </h1>

            <p class="mt-4 sm:text-xl sm:leading-relaxed">
              We offer courses for beginners, intermediates, and experts without ads, paywalls, or donation prompts.
            </p>

            <Link
                class="block w-full rounded bg-active mt-4 px-12 py-3 text-sm font-medium text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                to="/courses"
              >
              Start Now
            </Link>
          </div>
        </div>
      </section> 
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col">
          <h2 class="text-2xl font-extrabold sm:text-4xl mb-4">Our Courses</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
              courses.filter((_, i) => i < 6).map(item => Course(item))
            }
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col">
          <h2 class="text-2xl font-extrabold sm:text-4xl mb-4">Features</h2>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col">
          <h2 class="text-2xl font-extrabold sm:text-4xl mb-4">Categories</h2>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col">
          <h2 class="text-2xl font-extrabold sm:text-4xl mb-4">Support</h2>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
