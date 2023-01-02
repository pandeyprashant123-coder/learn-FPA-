import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Course from "../components/course";

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
                            Our Courses
                        </h1>
                    </div>
                </div>
            </section>
            {
                (() => {

                    let output = [];

                    for (const key in categories) {
                        
                        if (categories[key].filter(i => i.type == "course").length == 0) continue;

                        output.push(<section class="mx-auto max-w-screen-xl px-4 py-8">
                            <h2 className="text-xl font-bold sm:text-4xl mb-2">{ key }</h2>
                            <div className="flex flex-row">
                                {
                                    categories[key].filter(i => i.type == "course").map(i => <div className="w-64"><Course {...i} /></div>)
                                }
                            </div>
                        </section>);

                    }

                    return output;

                })()
            }
        </Layout>
    )
}

export const Head = () => <Seo title="Courses" />

export default CoursesPage
