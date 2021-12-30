<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const tech = await fetch(`${slug}.json`)
        .then((r) => r.json());
    return {
      props: { tech }
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
  <meta name="description" content="Web Development - {tech.name}">
</svelte:head>
<div class="container" in:fly="{{ x: 200, duration: 500 , delay:100}}">
  
  <div class="title"><h1>{tech.name}</h1></div>
  
  <div class="links">
    {#if tech.homePageUrl}
    <a href="{tech.homePageUrl}" target="_blank" rel="noopener">
      <img src="/images/logo-homepage.webp" alt="Home Page of {tech.name}" />
    </a>
    {/if}
    {#if tech.wikipediaUrl}
      <a href="{tech.wikipediaUrl}" target="_blank" rel="noopener">
        <img src="/images/logo-wikipedia.webp" alt="Wikipedia entry of {tech.name}" />
      </a>
    {/if}
    {#if tech.repoUrl}
      <a href="{tech.repoUrl}" target="_blank" rel="noopener">
        {#if $currentTheme === 'light'}
          <img src="/images/logo-git-light.webp" alt="Repository of {tech.name}" />
        {:else}
          <img src="/images/logo-git-dark.webp" alt="Repository of {tech.name}" />
        {/if}
      </a>
    {/if}
    
    {#if tech.stackshareUrl}
      <a href="{tech.stackshareUrl}" target="_blank" rel="noopener">
        <img src="/images/logo-stackshare.webp" alt="Stackshare.io of {tech.name}" />
      </a>
    {/if}    
  </div>
  
  <div class="hero-image" >
    <img src="{tech.image.url}" alt="{tech.name}">
  </div>
  
  <div class="description">
    <h2>{tech.descShort}</h2>
    <p>{tech.descLong}</p>
  </div>
  
  <div class="resource">
    <a href="{tech.resourceMain.url}" target="_blank" rel="noopener">
      <img src="{tech.resourceMain.image.url}" alt="{tech.resourceMain.name}">
      <h3> {tech.resourceMain.name} </h3>
    </a>
  </div>

</div>


<style>

/* Make images easier to work with */
img{
  max-width: 100%;
  display: block;
  object-fit: contain;
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
  height: 500;
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
  height: 500;
  aspect-ratio: 1;
  border-radius: 5%;
}
.resource{
  display: flex;
  justify-content: center;
}
.resource h3{
  margin-top: 1rem;
  text-align: center;
}

.resource img{
  width: 100%;
  height: 500;
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