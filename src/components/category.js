import * as React from "react"
import { Link } from "gatsby"

const Slugify = (name) => {

    return name.toLowerCase().replace(/ /g, '-').replace(/(?![a-zA-Z\-])/, '')

}

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

const Category = (item) => {

    return <span class={`rounded-3xl bg-slate-100 px-2 text-sm ${GetTagStyle(item)}`}>
        <Link to={`/categories/${Slugify(item)}`}>
            {item}
        </Link>
    </span>

}

export default Category
