import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Category from "../components/category";

function CoursesPage() {

    const categories = require('../../data/categories.json')
    const courses = require('../../data/courses.json')

    return (
        <Layout>
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Categories
                        </h1>
                    </div>
                </div>
            </section>
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 pb-80 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <div>
                            {
                                Object.keys(categories).map(i => <Category item={i} className={'m-1'} />)
                            }
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Courses" />

export default CoursesPage
