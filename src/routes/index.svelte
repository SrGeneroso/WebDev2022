<script context="module">
  import { GraphQLClient } from 'graphql-request';
  export async function load() {
    const graphcms = new GraphQLClient(
      'https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master',
      {
        headers: {},
      }
    )
    const { techs } = await graphcms.request(
      `query Techs { 
        techs {
          name
          slug
        }
      }`
    )
    return {
      props: {
        techs,
      },
    }
  }
</script>

<script>
  export let techs
</script>

<svelte:head>
  <title>Web Dev Roadmap 2022</title>
</svelte:head>

<h1>Roadmap for Web Development 2022</h1>

{#each techs as tech}
  <p>
    <a href="/tech/{tech.slug}">
      {tech.name}
    </a>
  </p>
{/each}
