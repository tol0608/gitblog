import React from 'react';
import { Link, PageProps } from 'gatsby';
import Bio from '../components/bio';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Test from '../components/Test';

type BlogPost = {
    excerpt: string;
    fields: {
        slug: string;
    };
    frontmatter: {
        date: string;
        title: string;
        description: string;
    };
};

type BlogIndexProps = PageProps<{
    site: {
        siteMetadata: {
            title: string;
        };
    };
    allMarkdownRemark: {
        nodes: BlogPost[];
    };
}>;

const BlogPostItem: React.FC<{ post: BlogPost }> = ({ post }) => (
    <li>
        <article className="post-list-item" itemScope itemType="http://schema.org/Article">
            <header>
                <h2>
                    <Link to={post.fields.slug} itemProp="url">
                        <span itemProp="headline">{post.frontmatter.title || post.fields.slug}</span>
                    </Link>
                </h2>
                <small>{post.frontmatter.date}</small>
            </header>
            <section>
                <p
                    dangerouslySetInnerHTML={{
                        __html: post.frontmatter.description || post.excerpt,
                    }}
                    itemProp="description"
                />
            </section>
        </article>
    </li>
);

const BlogIndex: React.FC<BlogIndexProps> = ({ data, location }) => {
    const siteTitle = data.site.siteMetadata?.title || 'Title';
    const posts = data.allMarkdownRemark.nodes;

    return (
        <Layout location={location} title={siteTitle}>
            <Seo title="All posts" description={undefined} children={undefined} />
            <Bio />
            <Link to="/tags">ALL TAG</Link>
            <Test text={''} />
            <ol style={{ listStyle: 'none' }}>
                {posts.map(post => (
                    <BlogPostItem key={post.fields.slug} post={post} />
                ))}
            </ol>
        </Layout>
    );
};

export default BlogIndex;
