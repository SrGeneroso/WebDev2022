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
          descShort
          descLong
          homePageUrl
          wikipediaUrl
          stackshareUrl
          repoUrl
          image {
            url
          }
          resourceMain {
            name
            url
            image{
              url
            }
          }
          resourcesExtra {
            name
            url
            image{
              url
            }
          }
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
  import { currentTheme } from '../../stores.js';
  export let tech;
  import {fly} from 'svelte/transition';
</script>

<svelte:head>
  <title>{tech.name} - WebDev 2022</title>
</svelte:head>
<div class="container" in:fly="{{ x: 200, duration: 500 , delay:100}}">
  
  <div class="title"><h1>{tech.name}</h1></div>
  
  <div class="links">
    {#if tech.homePageUrl}
    <a href="{tech.homePageUrl}" target="_blank">
      <img src="/images/logo-homepage.png" alt="Home Page of {tech.name}" />
    </a>
    {/if}
    {#if tech.wikipediaUrl}
      <a href="{tech.wikipediaUrl}" target="_blank">
        <img src="/images/logo-wikipedia.png" alt="Wikipedia entry of {tech.name}" />
      </a>
    {/if}
    {#if tech.repoUrl}
      <a href="{tech.repoUrl}" target="_blank">
        {#if $currentTheme === 'light'}
          <img src="/images/logo-git-light.png" alt="Repository of {tech.name}" />
        {:else}
          <img src="/images/logo-git-dark.png" alt="Repository of {tech.name}" />
        {/if}
      </a>
    {/if}
    
    {#if tech.stackshareUrl}
      <a href="{tech.stackshareUrl}" target="_blank">
        <img src="/images/logo-stackshare.png" alt="Stackshare.io of {tech.name}" />
      </a>
    {/if}    
  </div>
  
  <div class="hero-image" >
    <img src="{tech.image.url}" alt="{tech.image.name}">
  </div>
  
  <div class="description">
    <h2>{tech.descShort}</h2>
    <p>{tech.descLong}</p>
  </div>
  
  <div class="resource">
    <a href="{tech.resourceMain.url}" target="_blank">
      <img src="{tech.resourceMain.image.url}" alt="">
      <h4> {tech.resourceMain.name} </h4>
    </a>
  </div>

</div>


<style>

/* Make images easier to work with */
img{
  max-width: 100%;
  display: block;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* components */
.container {
  display: grid;
  gap: 1rem;
  padding-block: 2rem;
  width: min(95%, 70rem);
  margin-inline: auto;
}

@media (min-width: 55rem){
  .container{
    grid-template-columns: repeat(4, 1fr);
  }

  .title{
    grid-column: 1/4;
  }

  .links{
    grid-column: 4/5;
  }

  .hero-image{
    grid-column: 1/3;
    grid-row: 2/3;
  }

  .resource{
    grid-column: 1/3;
    grid-row: 3/4;
  }

  .description{
    grid-column: 3/5;
    grid-row: 2/4;
  }
}

.title, .title h1 {
  font-size: 3rem;
  border-radius: 0.5rem;
}

.links{
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;
}
.links img {
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 50%;
}
.hero-image {
  padding: 2rem;
  display: grid;
  justify-items: center;
  align-items: center;
}
.hero-image img{
  width: 90%;
  height: auto;
  aspect-ratio: 1;
  border-radius: 5%;
}
.resource h4{
  margin-top: 1rem;
  text-align: center;
}

.description{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  align-content: center;
  justify-content: center;
}
.description h2{
  font-size: 1.5rem;
}
</style>