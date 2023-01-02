import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import RenderMarkdown from "../components/renderMarkdown";
import Person from "../components/person"

import Category from "../components/category"

const Author = (author) => <Link className="hover:underline" to={`/authors/${author.slug}`}>{author.name}</Link>;

const Course = ({ pageContext }) => {

    const { slug, title, body, authors, version, sections, tags } = pageContext;

    return <Layout>
        <section>
            <div class="mx-auto max-w-screen-md px-4 py-16 min-h-screen">
                <div class="flex gap-2 mb-1">
                    {tags.map(item => <Category item={item} />)}
                </div>
                <h1 className="font-bold text-4xl">{title}</h1>
                { authors && <p className="text-xl mb-16 max-w-2xl">By {authors.map(author => Author(author))}</p> }
                {
                    RenderMarkdown(body)
                }
            </div>
        </section>
    </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Course
