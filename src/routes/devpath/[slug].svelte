<script context="module">
  export async function load({ page, fetch }) {
    const slug = page.params.slug;
    const categories = await fetch(`${slug}.json`)
        .then((r) => r.json());

    return {
      props: {
        categories,
        slug
      }
    };
  }
</script>

<script>
  import TechCard from '$lib/techCard/TechCard.svelte';
  export let categories;
  export let slug;
</script>

<svelte:head>
  <title>WebDev 2022</title>
</svelte:head>

 
<div class="container" >
  
  <h1 class="text-center"> Follow the {slug} path</h1>
  
  {#each categories as category}
  
    <h2 class="text-center">{category.name}</h2>
    
    <div class="category">
    
      {#if category.branch[0].__typename == "Tech"}
        
        <div class="techs">
        
          {#each category.branch as tech,i}
            <TechCard tech = {tech} i = {i}></TechCard>
          {/each}
        
        </div>

      {:else}
        
        {#each category.branch as subCategory}
          
          <h3 class="text-center">{subCategory.name}</h3>
          
          <div class="techs">
                    
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

* {
  box-sizing: border-box;
  transition: all .2s ease-in-out;
}

h2{
  text-decoration: underline;
}
.text-center{
  text-align: center;
}

.container {
  margin-inline: auto;
  width: 90%;
}
.category{
  display: flex;
  flex-direction: column;
}

.techs{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

</style>