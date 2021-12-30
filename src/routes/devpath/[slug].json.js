import { GraphQLClient } from "graphql-request";
export async function get({params}) {

	const { slug } = params

  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
    {
      headers: {},
    }
  )

  const { categories } = await graphcms.request(
    `query categories ($currentSlug: String) {
      categories (where: {devPath: {name: $currentSlug}}){
        name
        branch {
          __typename
          ... on Category {
            id
            name
            branch {
              ... on Tech {
                slug
                name
                descShort
                image {
                  url(transformation:{
                    image:{resize:{width: 500, height: 500, fit:clip}}
                    document: {output: { format: webp }} 
                  })
                }
              }
            }
          }
          ... on Tech {
            slug
            name
            descShort
            image {
              url(transformation:{
                image:{resize:{width: 500, height: 500, fit:clip}}
                document: {output: { format: webp }} 
              })
            }
          }
        }
      }
    }`,
    {
      currentSlug: slug,
    }
  );

  return {
    body:  categories 
  };
}