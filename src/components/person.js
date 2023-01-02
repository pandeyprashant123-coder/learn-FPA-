import * as React from "react"
import { Link } from "gatsby"

function Person({ name, slug, email }) {

    const authors = require('../../data/authors.json')
    const thisPerson = authors.filter(i => i.slug == slug)[0];

    if (thisPerson == undefined) return <></>

    // TODO: Include profile picture

    return <Link className="block w-full h-full" to={`/authors/${slug}`} target="_blank">
        <div className="rounded shadow p-4 h-full flex flex-row gap-4">
            <div class="w-full">
                <h3 className="text-lg font-bold">{thisPerson.title}</h3>
                <p className="text-md">{thisPerson.description || "Looks like this author didn't write a description for themselves– It'll be fixed soon."}</p>
            </div>
        </div>
    </Link>

}
export default Person
