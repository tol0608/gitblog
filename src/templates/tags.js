import React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import * as TagStyles from "../styles/tag.module.css";

const Tags = ({ pageContext, data, location }) => {
    const { tag } = pageContext;
    const { edges, totalCount } = data.allMarkdownRemark;
    const siteTitle = data.site.siteMetadata.title;
    const tagHeader = `${tag} 태그의 글은 ${totalCount}개 입니다.`;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title={tagHeader} />
            <h1>{tagHeader}</h1>
            <ul>
                {edges.map(({ node }) => {
                    const { slug } = node.fields;
                    const { title } = node.frontmatter;
                    return (
                        <li className={TagStyles.tagList} key={slug}>
                            <Link to={slug}>{title}</Link>
                        </li>
                    );
                })}
            </ul>
            <Link to="/tags">All tags</Link>
        </Layout>
    );
};

export default Tags;

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
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
`;
