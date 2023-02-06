import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Course from "../components/course"

import Category from "../components/category"

function IndexPage() {

  const courses = require('../../data/courses.json');
  const categories = require('../../data/categories.json');

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
        <div className="mx-auto max-w-screen-xl px-4 py-16">
          <h2 className="text-2xl font-extrabold sm:text-4xl mb-4">Categories</h2>
          <div class="lg:flex flex-col gap-4">
            <div className="w-full">
              <p className="text-lg">To make your learning experience easier, we offer a number of categories so that articles are easily searchable and grouped based on meaning.</p>
            </div>
            <div className="w-full mt-4">
              {
                Object.keys(categories).map(i => <Category item={i} className="m-1" />)
              }
              <Link class="text-sm underline text-sky-400 m-2" to="/categories">Show More...</Link>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col">
          <h2 class="text-2xl font-extrabold sm:text-4xl mb-4">Support</h2>
          <div class="lg:flex flex-col gap-4">
            <div className="w-full">
              <p className="text-lg">To help support our effort on FPA Learn, you can donate to us through our main support page. You can also choose to volunteer if you would like to contribute articles that you have written to the learning platform&mdash; allowing a whole new generation to learn coding. </p>
            </div>
            <div className="w-1/6">
              <Link
                  class="block w-full rounded bg-active mt-4 px-12 py-3 text-sm font-medium text-center text-white shadow hover:bg-active focus:outline-none focus:ring active:bg-active sm:w-auto"
                  to="https://about.fairfieldprogramming.org/support/"
                >
                Support the FPA
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
