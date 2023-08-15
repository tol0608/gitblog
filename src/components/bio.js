import * as React from "react";
import {useStaticQuery, graphql} from "gatsby";
import {StaticImage} from "gatsby-plugin-image";

const Bio = () => {
    const data = useStaticQuery(graphql`
    query BioQuery {
      site {
        siteMetadata {
          author {
            name
            summary
          }
        }
      }
    }
  `)
    // Set these values by editing "siteMetadata" in gatsby-config.js
    const author = data.site.siteMetadata?.author

    return (
        <div className="bio">
            <StaticImage
                className="bio-avatar"
                layout="fixed"
                formats={["auto", "webp", "avif"]}
                src="../images/ljh_photo.png"
                width={140}
                height={140}
                quality={95}
                alt="Profile picture"
            />
            {author?.name && (
                <h6>
                    {author?.summary || null}, <span>{author.name}</span>
                    {` `}
                </h6>
            )}
        </div>
    )
}

export default Bio
