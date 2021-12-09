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
  import {fly} from 'svelte/transition'
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
<!-- <div class="testimonial-grid">
  <article class="testimonial grid-col-span-2 flow bg-primary-400 quote text-neutral-100">
    <div class="flex">
      <div>
        <img  src="/images/logo-stackshare.png" alt="daniel clifford">
      </div>
      <div>
        <h2 class="name">Daniel Clifford</h2>
        <p class="position">Verified Graduate</p>
      </div>
    </div>
    <p>
      I received a job offer mid-course, and the subjects I learned were current, if not more so,
      in the company I joined. I honestly feel I got every penny’s worth.
    </p>
    <p>
      “ I was an EMT for many years before I joined the bootcamp. I’ve been looking to make a
      transition and have heard some people who had an amazing experience here. I signed up
      for the free intro course and found it incredibly fun! I enrolled shortly thereafter.
      The next 12 weeks was the best - and most grueling - time of my life. Since completing
      the course, I’ve successfully switched careers, working as a Software Engineer at a VR startup. ”
    </p>
  </article>
  <article class="testimonial flow bg-secondary-400 text-neutral-100">
    <div class="flex">
      <div>
        <img src="/images/logo-wikipedia.png" alt="Jonathan Walters">
      </div>
      <div>
        <h2 class="name">Jonathan Walters</h2>
        <p class="position">Verified Graduate</p>
      </div>
    </div>
    <p>
      The team was very supportive and kept me motivated
    </p>
    <p>
      “ I started as a total newbie with virtually no coding skills. I now work as a mobile engineer
      for a big company. This was one of the best investments I’ve made in myself. ”
    </p>
  </article>
  <article class="testimonial flow bg-neutral-100 text-secondary-400">
    <div class="flex">
      <div>
        <img src="/images/logo-homepage.png" alt="Jeanette Harmon">
      </div>
      <div>
        <h2 class="name">Jeanette Harmon</h2>
        <p class="position">Verified Graduate</p>
      </div>
    </div>
    <p>
      An overall wonderful and rewarding experience</p>
    <p>
      “ Thank you for the wonderful experience! I now have a job I really enjoy, and make a good living
      while doing something I love. ”
    </p>
  </article>
  <article class="testimonial grid-col-span-2 flow bg-secondary-500 text-neutral-100">
    <div class="flex">
      <div>
        <img class="border-primary-400" src="/images/logo-git-light.png" alt="Patrick Abrams">
      </div>
      <div>
        <h2 class="name">Patrick Abrams</h2>
        <p class="position">Verified Graduate</p>
      </div>
    </div>
    <p>
      Awesome teaching support from TAs who did the bootcamp themselves. Getting guidance from them and
      learning from their experiences was easy.
    </p>
    <p>
      “ The staff seem genuinely concerned about my progress which I find really refreshing. The program
      gave me the confidence necessary to be able to go out in the world and present myself as a capable
      junior developer. The standard is above the rest. You will get the personal attention you need from
      an incredible community of smart and amazing people. ”
    </p>
  </article>
  <article class="testimonial flow bg-neutral-100 text-secondary-400">
    <div class="flex">
      <div>
        <img src="/images/logo-webdev-light.png" alt="Kira Whittle">
      </div>
      <div>
        <h2 class="name">Kira Whittle</h2>
        <p class="position">Verified Graduate</p>
      </div>
    </div>
    <p>
      Such a life-changing experience. Highly recommended!
    </p>
    <p>
      “ Before joining the bootcamp, I’ve never written a line of code. I needed some structure from
      professionals who can help me learn programming step by step. I was encouraged to enroll by a former
      student of theirs who can only say wonderful things about the program. The entire curriculum and staff
      did not disappoint. They were very hands-on and I never had to wait long for assistance. The agile team
      project, in particular, was outstanding. It took my learning to the next level in a way that no tutorial
      could ever have. In fact, I’ve often referred to it during interviews as an example of my developent
      experience. It certainly helped me land a job as a full-stack developer after receiving multiple offers.
      100% recommend! ”
    </p>
  </article> -->
<!-- </div> -->

<style>
:root {
  --clr-primary-400: 263 55% 52%;
  --clr-secondary-400: 217 19% 35%;
  --clr-secondary-500: 219 29% 14%;
  --clr-neutral-100: 0 0% 100%;
  --clr-neutral-200: 210 46% 95%;
  --clr-neutral-300: 0 0% 81%;

  --ff-primary: "Barlow Semi Condensed", sans-serif;

  --fw-400: 500;
  --fw-700: 600;

  --fs-300: 0.6875rem;
  --fs-400: 0.8125rem;
  --fs-500: 1.25rem;
}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}


/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}


/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
    scroll-behavior: auto;
  }

  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}

/* body {
  display: grid;
  place-content: center;
  min-height: 100vh;

  font-family: var(--ff-primary);
  font-weight: var(--fw-400);

  background-color: hsl(var(--clr-neutral-200));
} */

h1,
h2,
h3 {
  font-weight: var(--fw-700);
}

.flow > *:where(:not(:first-child)) {
  margin-top: var(--flow-spacer, 1em);
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
  box-shadow: 2.5rem 3.75rem 3rem -3rem hsl(var(--clr-secondary-400) / 0.25);
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