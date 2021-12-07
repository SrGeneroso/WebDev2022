<script context="module">
  import { GraphQLClient } from "graphql-request";
  
  export async function load(ctx) {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
      {headers: {}}
    );

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
                      image:{resize:{width: 300, height: 300, fit:scale}}
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
                  image:{resize:{width: 300, height: 300, fit:scale}}
                })
              }
            }
          }
        }
      }`,
      {
        currentSlug: ctx.page.params.slug,
      }
    );

    return {
      props: {
        categories,
      },
    };

  }
  
</script>

<script>
  import TechCard from '$lib/techCard/TechCard.svelte';
  export let categories;
</script>

<svelte:head>
  <title>WebDev 2022</title>
</svelte:head>

 
<div class="container" >
  
  {#each categories as category}
    
    <div class="category">
      
      <h2>{category.name}</h2>

      {#if category.branch[0].__typename == "Tech"}

        {#each category.branch as tech,i}
          <TechCard tech = {tech} i = {i}></TechCard>
        {/each}

      {:else}
        
        {#each category.branch as subCategory}
          <div class="subcategory">
            <h3>{subCategory.name}</h3>
            
            {#each subCategory.branch as tech,i}
              <TechCard tech = {tech} i = {i}></TechCard>  
            {/each}
          </div>

        {/each}

      {/if}
      
    </div>

  {/each}

</div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
  transition: all .2s ease-in-out;
}


.container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}


</style>