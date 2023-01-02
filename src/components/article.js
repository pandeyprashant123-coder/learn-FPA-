import * as React from "react"
import { Link } from "gatsby"

const Article = ({ item, className }) => {

    const { title, slug, description } = item;

    return <Link className={`block w-full h-full ${className}`} to={`/articles/${slug}`}>
        <div className="rounded shadow p-4">
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-md">{description || ""}</p>
        </div>
    </Link>

}

export default Article
