import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";
import BlogTags from "../components/BlogTags";
import BlogNavigation from "../components/BlogNavigation";

const BlogPostTemplate = ({ data, location }) => {
    const {
        previous,
        next,
        site,
        markdownRemark: post,
    } = data;

    const siteTitle = site.siteMetadata?.title || `Title`;

    return (
        <Layout location={location} title={siteTitle}>
            <article
                className="blog-post"
                itemScope
                itemType="https://schema.org/Article"
            >
                <header>
                    <h1 itemProp="headline">{post.frontmatter.title}</h1>
                    <p>{post.frontmatter.date}</p>
                </header>
                <section
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                />
                <hr />
                <BlogTags tags={post.frontmatter.tags} />
                <BlogNavigation previous={previous} next={next} />
                <footer>
                    {/* Add Bio component or other footer content */}
                </footer>
            </article>
        </Layout>
    );
};

export const Head = ({ data: { markdownRemark: post } }) => {
    return (
        <Seo
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
        />
    );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
        tags
      }
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`;
