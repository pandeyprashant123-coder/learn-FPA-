import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Course from "../components/course"
import Person from "../components/person"

import Category from "../components/category"

function SearchPage() {

  let queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('q');
 
  queryString = '?q=' + encodeURIComponent(query); // so that it doesn't have the end 'c' bit

  const courses = require('../../data/courses.json');
  const articles = require('../../data/articles.json');
  const authors = require('../../data/authors.json');
  const categories = require('../../data/categories.json');

  let resultCategory = urlParams.get('c');

  let displayCategory = "";
  let displayFunction = () => <></>;
  let displayList = [];

  if (resultCategory == 'courses') {
    displayCategory = "Course";
    displayList = courses;
    displayFunction = Course;
  }
  if (resultCategory == 'articles') {
    displayCategory = "Article";
    displayList = articles;
    displayFunction = Course;
  }
  if (resultCategory == 'authors') {
    displayCategory = "Author";
    displayList = authors;
    displayFunction = Person;
  }

  return (
    <Layout>
    <section>
        <div
        class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
        >
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-3xl font-extrabold sm:text-5xl">
                    {displayCategory} Results for "{query}"
                </h1>
                <div className="text-lg">
                  <Link className="text-sky-400 hover:underline hover:text-sky-500" to={`/search${queryString}&c=courses`}>Courses</Link>
                  &nbsp;
                  &bull;
                  &nbsp;
                  <Link className="text-sky-400 hover:underline hover:text-sky-500" to={`/search${queryString}&c=articles`}>Articles</Link>
                  &nbsp;
                  &bull;
                  &nbsp;
                  <Link className="text-sky-400 hover:underline hover:text-sky-500" to={`/search${queryString}&c=authors`}>Authors</Link>
                </div>
            </div>
        </div>
    </section>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-16 lg:flex flex-col mb-32">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {
            displayList.filter(item => item.title.toUpperCase().includes(query.toUpperCase())).map(item => Course(item))
          }
        </div>
      </div>
    </section>
    </Layout>
  )
}

export const Head = () => {

  let queryString = typeof window !== 'undefined' ? window.location.search : '';
  const urlParams = new URLSearchParams(queryString);
  const query = urlParams.get('q');
 
  queryString = '?q=' + encodeURIComponent(query); // so that it doesn't have the end 'c' bit

  let resultCategory = urlParams.get('c');
  let displayCategory = "";
  
  if (resultCategory == 'courses')
    displayCategory = "Course";
  if (resultCategory == 'articles')
    displayCategory = "Article";
  if (resultCategory == 'authors')
    displayCategory = "Author";

  return <Seo title={`${displayCategory} Results for "${query}"`} />

}

export default SearchPage
