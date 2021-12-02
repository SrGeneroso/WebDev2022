<script context="module">
  import { GraphQLClient } from "graphql-request";

  export async function load(ctx) {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
      {
        headers: {},
      }
    );

    const { techs } = await graphcms.request(
      `query multipleItems ($devPath: DevPath!) {
        techs (where: {devPath: $devPath}){
          slug
          name
          descShort
          image {
            url(transformation:{
              image:{resize:{width: 100, height: 100, fit:scale}}
            })
          }
        }
      }`,
      {
        devPath: ctx.page.params.slug,
      }
    );
    return {
      props: {
        techs,
      },
    };
  }
  
</script>

<script>
  export let techs;
  console.log(techs)
</script>

<svelte:head>
  <title>test</title>
</svelte:head>

<h1>Hello world from devpath</h1>

{#each techs as tech}
<img src={tech.image.url} alt="">  
<p>{tech.name}</p>
<p>{tech.descShort}</p>
{/each}
