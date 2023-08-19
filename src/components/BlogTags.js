import kebabCase from "lodash.kebabcase";
import {Link} from "gatsby";
import * as React from "react";

const BlogTags = ({tags}) => (
    <div className="tags">
        <ul>
            {tags
                ? tags.map((tag) => (
                    <li key={kebabCase(tag)}>
                        <Link to={`/tags/${kebabCase(tag)}`}>{kebabCase(tag)}</Link>
                    </li>
                ))
                : null}
        </ul>
    </div>
);
export default BlogTags;