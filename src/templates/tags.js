import React from "react"
import * as Tag from "../styles/tag.module.css"
import {Link, graphql} from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Tags = ({pageContext, data, location}) => {
    const {tag} = pageContext
    const {edges, totalCount} = data.allMarkdownRemark
    const siteTitle = data.site.siteMetadata.title
    // const tagHeader = `${totalCount} post${
    //     totalCount === 1 ? "" : "s"
    // } tagged with "${tag}"`
    const tagHeader = `${tag} 태그의 글은 ${totalCount}개 입니다.`
    // s태그의 글은 n개입니다. 로 수정  230618


    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={tagHeader}/>
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({node}) => {
                    const {slug} = node.fields
                    const {title} = node.frontmatter
                    return (
                        <li className={Tag.tagList} key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    )
                })}
            </ul>
            <Link to="/tags">All tags</Link>
        </Layout>
    )
}

export default Tags

export const pageQuery = graphql`
  query($tag: String) {
    site {
    siteMetadata {
      title
    }
  }
  allMarkdownRemark(
    limit: 2000
    sort: {frontmatter: {date: ASC}}
    filter: {frontmatter: {tags: {in: [$tag]}}}
  ) {
    totalCount
    edges {
      node {
        fields {
          slug
        }
        frontmatter {
          title
        }
      }
    }
  }
  }
`
