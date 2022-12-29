import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

function CoursesPage() {

    return (
        <Layout>
            <section>
                <div
                class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
                >
                    <div class="mx-auto max-w-4xl text-center">
                        <h1 class="text-3xl font-extrabold sm:text-5xl">
                            Our Courses
                        </h1>
                    </div>
                </div>
            </section>
            <section>
            </section>
        </Layout>
    )
}

export const Head = () => <Seo title="Courses" />

export default CoursesPage
