<script context="module">
  import { GraphQLClient } from "graphql-request";
  export async function load(ctx) {
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
          image {
            url
          }
          resorucesSpotlight {
            id
          }
          stackshareUrl
          wikipediaUrl
        }
      }`,
      {
        slug: ctx.page.params.slug,
      }
    );
    return {
      props: {
        tech,
      },
    };
  }
</script>

<script>
  export let tech;
</script>

<svelte:head>
  <title>{tech.name}</title>
</svelte:head>

<h1>{tech.name}</h1>
<img src={tech.image.url} alt={tech.name}>
{#if tech.stackshareUrl}
  <p>{tech.stackshareUrl}</p>
{/if}
<p>{tech.wikipediaUrl}</p>
