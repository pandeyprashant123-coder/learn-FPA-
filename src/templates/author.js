import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Article from "../components/article"
import RenderMarkdown from "../components/renderMarkdown";

import Category from "../components/category"

const Course = ({ pageContext }) => {

    const { slug, title, description, authors, version, sections, tags, body } = pageContext;
    const articles = require('../../data/articles.json');
    const authorArticles = articles.filter(i => i.authors.filter(i => i.slug === slug).length > 0)

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-md px-4 py-16 min-h-screen">
            <div class="flex gap-2">
                {tags.map(item => <Category item={item} />)}
            </div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>
            {/* Markdown Section */}
            {
                RenderMarkdown(body.filter(i => i.data != title).filter(i => i.data != description).filter(i => i.type != 'html_contents'))
            }
            <h2 className="text-3xl font-bold w-full mt-8 mb-2 border-b-2">Works</h2>
            <div className="grid grid-cols-2 gap-4 p-2">
            {
                authorArticles.map(article => <Article item={article} className="flex" />)
            }
            </div>
        </div>
      </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Course
