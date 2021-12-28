import { GraphQLClient } from "graphql-request";
export async function get() {

  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
    {
      headers: {},
    }
  )
  const { devPaths } = await graphcms.request(
    `query devPaths {
      devPaths(orderBy: order_ASC) {
        name
        order
        description
      }
    }`,
  );

  return {
    body: 
      devPaths
  }
}