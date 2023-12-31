import React from "react";
import Layout from "../components/layout";
import {Link, graphql} from "gatsby";
import Seo from "../components/seo";
import * as TagStyles from "../styles/tag.module.css";

var kebabCase = require("lodash.kebabcase");

const TagsPage = ({
                      data: {
                          allMarkdownRemark: {group},
                          site: {
                              siteMetadata: {title},
                          },
                      },
                      location,
                  }) => (
    <Layout location={location} title={title}>
        <Seo
            title="all tags"
            keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <div>
            <h2>Tags</h2>
            <ul className={TagStyles.tagsList_ul}>
                {group.map(tag => (
                    <li key={tag.fieldValue}>
                        <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                            {tag.fieldValue} ({tag.totalCount})
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    </Layout>
)

export default TagsPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
    group(field: {frontmatter: {tags: SELECT}}) {
      fieldValue
      totalCount
    }
  }

  }
`