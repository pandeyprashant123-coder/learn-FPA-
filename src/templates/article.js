import * as React from "react"
import { Link } from "gatsby"



import Layout from "../components/layout"
import Seo from "../components/seo"

import RenderMarkdown from "../components/renderMarkdown";
import Person from "../components/person"
import ShareButtons from "../components/shareButtons"

import Category from "../components/category"

const Author = (author) => <Link className="hover:underline" to={`/authors/${author.slug}`}>{author.name}</Link>;

const Course = ({ pageContext,location }) => {

    const { slug, title, body, authors, version, sections, tags } = pageContext;
    const url = location.href;
    console.log(pageContext)
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
                <div className="flex flex-col text-center my-5 gap-3">
                    <p className="font-semibold text-xl text-active">Love this article? share it.</p>
                    <ShareButtons  url={url}/>
                </div>
        </section>
    </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Course
