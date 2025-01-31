/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
 */

const fs = require("fs");
const parse = require("./src/utility/stdParser.js");
const clean = require('./src/utility/stdCleaner.js');

function slugify(name) {

  return name.replace(/ /g, '-').replace(/(?![a-zA-Z\-])/g, '').toLowerCase();

}

// exports.onPostBuild = ({ page, actions }) => {
  
//   let files = fs.readdirSync("public/standards");

//   files = files.filter(file => !file.endsWith('.html'))
//   console.log(files);

// }

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */
exports.createPages = ({ actions }) => {
  
  const coursesRaw = fs.readdirSync('./content/courses');
  const articlesRaw = fs.readdirSync('./content/articles');
  const authorsRaw = fs.readdirSync('./content/authors');

  const { createPage } = actions

  let courseFileData = [];
  let articleFileData = [];
  let authorFileData = [];
  let categories = {};

  articlesRaw.forEach((articleName, index) => {

    const articleDataRaw = fs.readFileSync('./content/articles/' + articleName, 'utf-8');
    const articleDataUncleaned = parse(articleDataRaw);
    const articleData = clean(articleDataUncleaned);

    articleFileData.push(articleData);

    articleData.tags.forEach((item) => {

      if (categories[item] == undefined) categories[item] = [];
      categories[item].push({ ...articleData, type: 'article' });

    })

    createPage({
      path: `/articles/${articleData.slug}`,
      component: require.resolve("./src/templates/article.js"),
      context: { ...articleData, index },
      defer: false,
    })

  })

  coursesRaw.forEach((courseName, index) => {

    const courseDataRaw = fs.readFileSync('./content/courses/' + courseName, 'utf-8');
    const courseDataUncleaned = parse(courseDataRaw);
    const courseData = clean(courseDataUncleaned);

    courseData.tags.forEach((item) => {

      if (categories[item] == undefined) categories[item] = [];
      categories[item].push({ ...courseData, type: 'course' });

    })

    courseFileData.push(courseData);

    createPage({
      path: `/courses/${courseData.slug}`,
      component: require.resolve("./src/templates/course.js"),
      context: { ...courseData, index },
      defer: false,
    })

  }) 

  authorsRaw.forEach((authorName, index) => {

    const authorDataRaw = fs.readFileSync('./content/authors/' + authorName, 'utf-8');
    const authorDataUncleaned = parse(authorDataRaw);
    const authorData = clean(authorDataUncleaned);

    authorData.tags.forEach((item) => {

      if (categories[item] == undefined) categories[item] = [];
      categories[item].push({ ...authorData, type: 'author' });

    })

    authorFileData.push(authorData);

    createPage({
      path: `/authors/${authorData.slug}`,
      component: require.resolve("./src/templates/author.js"),
      context: { ...authorData, index },
      defer: false,
    })

  })

  Object.keys(categories).forEach(category => {

    const values = categories[category];
    const slugifiedCategory = slugify(category);

    createPage({
      path: `/categories/${slugifiedCategory}`,
      component: require.resolve("./src/templates/category.js"),
      context: { content: values, slug: slugifiedCategory, category },
      defer: false,
    })

  })

  fs.writeFileSync('./data/courses.json', JSON.stringify(courseFileData, null, 4));
  fs.writeFileSync('./data/articles.json', JSON.stringify(articleFileData, null, 4));
  fs.writeFileSync('./data/authors.json', JSON.stringify(authorFileData, null, 4));
  fs.writeFileSync('./data/categories.json', JSON.stringify(categories, null, 4));

}
