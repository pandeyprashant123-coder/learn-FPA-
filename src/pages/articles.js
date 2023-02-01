import React from "react"
import Layout from "../components/layout"
import Article from '../components/article'
import Seo from "../components/seo"

const articlesPage = () => {
  const categories = require("../../data/categories.json")
  const articles = require("../../data/articles.json")
  return (
    <Layout>
      <section>
        <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center">
          <div class="mx-auto max-w-4xl text-center">
            <h1 class="text-3xl font-extrabold sm:text-5xl">Our Articles</h1>
          </div>
        </div>
      </section>
      {(() => {
        let output = []

        // for (const key in categories) {
        //   if (categories[key].filter(i => i.type == "article").length == 0)
        //     continue

          output.push(
            <section class="mx-auto max-w-screen-xl px-4 py-8">
              {/* <h2 className="text-xl font-bold sm:text-4xl mb-2">{key}</h2> */}
              <div className="flex flex-col">
                {articles.map(i => (
                    <div className="w-full mt-7">
                      <Article {...i} />
                    </div>
                  ))}
              </div>
            </section>
          )
        // }

        return output
      })()}
    </Layout>
  )
}

export const Head = () => <Seo title="Articles" />

export default articlesPage
