import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Article from "../components/article"
import Course from "../components/course"

const HashCode = (str) => {
    let hash = 0;
    for (let i = 0, len = str.length; i < len; i++) {
        let chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

const GetTagStyle = (name) => {

    const allStyles = [
        "text-red-800 bg-red-200",
        "text-orange-800 bg-orange-200",
        "text-amber-800 bg-amber-200",
        "text-yellow-800 bg-yellow-200",
        "text-lime-800 bg-lime-200",
        "text-green-800 bg-green-200",
        "text-emerald-800 bg-emerald-200",
        "text-teal-800 bg-teal-200",
        "text-cyan-800 bg-cyan-200",
        "text-sky-800 bg-sky-200",
        "text-blue-800 bg-blue-200",
        "text-indigo-800 bg-indigo-200",
        "text-violet-800 bg-violet-200",
        "text-purple-800 bg-purple-200",
        "text-fuchsia-800 bg-fuchsia-200",
        "text-pink-800 bg-pink-200",
        "text-rose-800 bg-rose-200",
    ] 

    return allStyles[Math.abs(HashCode(name)) % allStyles.length]

}

const Category = ({ pageContext }) => {

    const { slug, category, content } = pageContext;
    console.log(content,"its me")
    return <Layout>
        <section>
            <div class="mx-auto max-w-screen-xl px-4 py-16 min-h-screen">
                <h1 className={`inline-block rounded-full px-4 py-2 text-4xl font-bold ${GetTagStyle(category)}`}>{category}</h1>
                {
                    content.filter(item => item.type == "course").length > 0 &&
                    <>
                        <h2 className="text-3xl font-bold w-full mt-8 mb-2 border-b-2">Courses</h2>
                        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
                            {
                                content.filter(item => item.type == "course").map(item => Course(item))
                            }
                       </div>
                    </>
                }
                {
                    content.filter(item => item.type == "article").length > 0 &&
                    <>
                        <h2 className="text-3xl font-bold w-full mt-8 mb-2 border-b-2">Articles</h2>
                        <div class="grid gap-4 grid-cols-1 md:grid-cols-2 mt-4">
                            {
                                content.filter(item => item.type == "article").map(item => Article(item))
                            }
                        </div>
                    </>
                }
            </div>
        </section>
    </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.category}`} 
    description={pageContext.description} />

export default Category
