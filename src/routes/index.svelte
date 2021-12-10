<script context="module">
  import { GraphQLClient } from "graphql-request";

  export async function load(ctx) {
    const graphcms = new GraphQLClient(
      "https://api-eu-central-1.graphcms.com/v2/ckwgsqn0x0kb801xo4jwobqkg/master",
      {headers: {}}
    );

    const { devPaths } = await graphcms.request(
      `query devPaths {
        devPaths(orderBy: order_ASC) {
          name
          order
          description
        }
      }`,
    );
    return {
      props: {
        devPaths,
      },
    };
  }
</script>

<script>
  export let devPaths;
</script>

<svelte:head>
  <title>Web Dev Roadmap 2022</title>
</svelte:head>

<h1>Roadmap for Web Development 2022</h1>

<div class="timeline">
  {#each devPaths as devPath}
    <div class="container {devPath.order %2 == 0 ? 'right' : 'left'}">
      <a href="/devpath/{devPath.name}">
        <div class="content">
          <h2>{devPath.name}</h2>
          <p>
            {devPath.description}
          </p>  
        </div>
      </a>
    </div>
  {/each}
</div>

<style>
  * {
    box-sizing: border-box;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline {
    position: relative;
    max-width: 1200px;
    margin: 0 auto;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    content: "";
    position: absolute;
    width: 6px;
    background-color: var(--accent-color);
    top: 0;
    bottom: 0;
    left: 50%;
    margin-left: -3px;
  }

  /* Container around content */
  .container {
    padding: 10px 40px;
    position: relative;
    background-color: inherit;
    width: 50%;
  }

  /* The circles on the timeline */
  .container::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    right: -17px;
    background-color: var(--tertiary-color);
    border: 4px solid #ff9f55;
    top: 15px;
    border-radius: 50%;
    z-index: 1;
  }

  /* Place the container to the left */
  .left {
    left: 0;
  }

  /* Place the container to the right */
  .right {
    left: 50%;
  }

  .left::before,
  .right::before {
    content: " ";
    height: 0;
    position: absolute;
    top: 22px;
    width: 0;
    z-index: 1;
    border: medium solid var(--secondary-color);
  }
  /* Add arrows to the left container (pointing right) */
  .left::before {
    right: 30px;
    border-width: 10px 0 10px 10px;
    border-color: transparent transparent transparent var(--secondary-color);
  }

  /* Add arrows to the right container (pointing left) */
  .right::before {
    left: 30px;
    border-width: 10px 10px 10px 0;
    border-color: transparent var(--secondary-color) transparent transparent;
  }

  /* Fix the circle for containers on the right side */
  .right::after {
    left: -16px;
  }

  /* The actual content */
  .content {
    padding: 20px 30px;
    background-color: var(--secondary-color);
    position: relative;
    border-radius: 6px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    transition: transform 0.2s;
  }

  .content:hover {
    transform: scale(1.05);
  }

  /* Media queries - Responsive timeline on screens less than 800px wide */
  @media screen and (max-width: 800px) {
    /* Place the timelime to the left */
    .timeline::after {
      left: 31px;
    }

    /* Full-width containers */
    .container {
      width: 100%;
      padding-left: 70px;
      padding-right: 25px;
    }

    /* Make sure that all arrows are pointing leftwards */
    .container::before {
      left: 60px;
      border: medium solid white;
      border-width: 10px 10px 10px 0;
      border-color: transparent var(--secondary-color) transparent transparent;
    }

    /* Make sure all circles are at the same spot */
    .left::after,
    .right::after {
      left: 15px;
    }

    /* Make all right containers behave like the left ones */
    .right {
      left: 0%;
    }
  }
</style>
