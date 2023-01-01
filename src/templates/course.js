import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

import Person from "../components/person"
import RenderMarkdown from "../components/renderMarkdown";

import Category from "../components/category"

const CourseContents = ({ children }) => {

    const articles = require('../../data/articles.json')

    if (children == undefined) return <></>;

    return <div class="grid grid-cols-1 gap-4">
        { 
            children.map(child => {

                return <div class="w-full shadow p-4 rounded">
                    <h3 class="font-bold text-xl">{ child?.parameters?.["title"].toString() }</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-2">
                        {
                            child?.children?.map(i => {

                                const slug = i.children[0].data;
                                const articleData = articles.filter(i => i.slug == slug)[0];
                            
                                return <Link class="block w-full text-lg text-sky-400 hover:underline hover:text-sky-500" to={`/articles/${slug}`}>
                                    {articleData.title}
                                </Link>
            
                            })
                        }
                    </div>
                </div>

            })
        }
    </div>;

}

const Course = ({ pageContext }) => {

    const { slug, title, description, authors, version, sections, tags, body } = pageContext;

  return <Layout>
    <section>
        <div class="mx-auto max-w-screen-md px-4 py-16">
            <div class="flex gap-2">
                {tags.map(item => Category(item))}
            </div>
            <h1 className="font-bold text-4xl">{title}</h1>
            <p className="text-xl mb-16 max-w-2xl">{description}</p>
            {/* Markdown Section */}
            {
                RenderMarkdown(body.filter(i => i.data != title).filter(i => i.data != description).filter(i => i.type != 'html_contents'))
            }
            <h2 class="text-3xl font-bold w-full mt-8 mb-4 border-b-2">Course Content</h2>
            {/* Course Contents */}
            {
                CourseContents(body.filter(i => i.type == 'html_contents')[0])
            }
            {/* Authors Section */}
            {
                authors && <>
                    <h2 class="text-3xl font-bold w-full mt-8 mb-4 border-b-2">Authors</h2>
                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                        {authors.map(author => Person(author))}
                    </div>
                </>
            }
        </div>
      </section>
  </Layout> 
}

export const Head = ({ pageContext }) => <Seo 
    title={`${pageContext.title}`} 
    description={pageContext.description} />

export default Course
