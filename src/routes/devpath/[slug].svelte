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
              image:{resize:{width: 300, height: 300, fit:scale}}
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
  import {fade, fly} from 'svelte/transition'
  export let techs;

</script>

<svelte:head>
  <title>WebDev 2022</title>
</svelte:head>

 
  <div class="container" >

    {#each techs as tech,i}
    <a href="/tech/{tech.slug}" in:fly="{{ y: 200, duration: 500 , delay:i*100}}" out:fade>
      <div class="card">
        <div class="card-header">
          <img src={tech.image.url} alt={tech.image.name} />
        </div>
        <div class="card-body">
          <!-- <span class="tag tag-teal">{tech.name}</span> -->
          <h4>{tech.name}</h4>
          <p>{tech.descShort}</p>
        </div>
      </div>
    </a>
      
    {/each}
    
  </div>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Roboto&display=swap");
* {
  box-sizing: border-box;
  transition: all .2s ease-in-out;
}


h4{
  color: var(--text-color);
}
a:hover{
  transform: scale(1.05);
}
.container {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
}
.card {
  margin: 0.5rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 15em;
  
}
.card-header img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.tag {
  background: #cccccc;
  border-radius: 50px;
  font-size: 12px;
  margin: 0;
  color: #fff;
  padding: 2px 10px;
  text-transform: uppercase;
  cursor: pointer;
}


.card-body p {
  font-size: 13px;
  margin: 0 0 40px;
}


</style>