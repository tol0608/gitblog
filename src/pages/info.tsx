import React, { FunctionComponent } from 'react';
import { graphql } from 'gatsby';
import Test from '../components/Test';

type AuthorInfo = {
    name: string;
    summary: string;
};

type SiteMetadata = {
    title: string;
    description: string;
    author: AuthorInfo;
};

type InfoPageProps = {
    data: {
        site: {
            siteMetadata: SiteMetadata;
        };
    };
};

const InfoPage: FunctionComponent<InfoPageProps> = ({ data }) => {
    const { title, description, author } = data.site.siteMetadata;

    return (
        <div>
            <Test text={title} />
            <Test text={description} />
            <Test text={author.name} />
        </div>
    );
};

export default InfoPage;

export const metadataQuery = graphql`
  {
    site {
      siteMetadata {
        author {
          name
          summary
        }
        description
        title
      }
    }
  }
`;
