import { GraphQLClient } from "graphql-request";
export async function get({params}) {

	const {slug} = params;

  const graphcms = new GraphQLClient(
    "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
    {
      headers: {},
    }
  );

  const { tech } = await graphcms.request(
    `query singleItem ($slug: String!){
      tech(where: {slug: $slug}) {
        id
        name
        descShort
        descLong
        homePageUrl
        wikipediaUrl
        stackshareUrl
        repoUrl
        image {
          url
            (transformation:{
              image:{resize:{width: 500, fit:clip}}
              document: {output: { format: webp }} 
            })
        }
        resourceMain {
          name
          url
          image{
            url
              (transformation:{
                image:{resize:{width: 500, fit:clip}}
                document: {output: { format: webp }} 
              })
          }
        }
      }
    }`,
    {
      slug: slug,
    }
  );

  return {
    body: 
      tech
  };

}

// export const get = () => {
//   console.log("hello");
//   return {
//     body: {
//       x : stuff.params.slug
//     }
//   }
// }

// import request, { GraphQLClient } from "graphql-request";
// console.log(request.body)

//   export async function get () {
//     const graphcms = new GraphQLClient(
//       "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
//       {
//         headers: {},
//       }
//     );
//     const { tech } = await graphcms.request(
//       `query singleItem ($slug: String!){
//         tech(where: {slug: $slug}) {
//           id
//           name
//           descShort
//           descLong
//           homePageUrl
//           wikipediaUrl
//           stackshareUrl
//           repoUrl
//           image {
//             url
//               (transformation:{
//                 image:{resize:{width: 500, fit:clip}}
//                 document: {output: { format: webp }} 
//               })
//           }
//           resourceMain {
//             name
//             url
//             image{
//               url
//                 (transformation:{
//                   image:{resize:{width: 500, fit:clip}}
//                   document: {output: { format: webp }} 
//                 })
//             }
//           }
//         }
//       }`,
//       {
//         slug: ctx.page.params.slug,
//       }
//     );
//     return {
//       props: {
//         tech,
//       },
//     };
//   }
  
  
  // export async function load(ctx) {
  //   const graphcms = new GraphQLClient(
  //     "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
  //     {
  //       headers: {},
  //     }
  //   );
  //   const { tech } = await graphcms.request(
  //     `query singleItem ($slug: String!){
  //       tech(where: {slug: $slug}) {
  //         id
  //         name
  //         descShort
  //         descLong
  //         homePageUrl
  //         wikipediaUrl
  //         stackshareUrl
  //         repoUrl
  //         image {
  //           url
  //             (transformation:{
  //               image:{resize:{width: 500, fit:clip}}
  //               document: {output: { format: webp }} 
  //             })
  //         }
  //         resourceMain {
  //           name
  //           url
  //           image{
  //             url
  //               (transformation:{
  //                 image:{resize:{width: 500, fit:clip}}
  //                 document: {output: { format: webp }} 
  //               })
  //           }
  //         }
  //       }
  //     }`,
  //     {
  //       slug: ctx.page.params.slug,
  //     }
  //   );
  //   return {
  //     props: {
  //       tech,
  //     },
  //   };
  // }



