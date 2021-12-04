
<svelte:head>
  <title>Web Dev Roadmap 2022</title>
</svelte:head>

<h1>Roadmap for Web Development 2022</h1>

<div class="timeline">
  <div class="container left">
    <a href="/devpath/General">
      <div class="content">
        <h2>General</h2>
        <p>
          Elementos de la web que son utiles en cualquier fase del desarrollo
        </p>
      </div>
    </a>
  </div>
  <div class="container right">
    <a href="/devpath/FrontEnd">
      <div class="content">
        <h2>FrontEnd</h2>
        <p>
          Front End es la parte de una aplicación que interactúa con los
          usuarios, es conocida como el lado del cliente. Básicamente es todo lo
          que vemos en la pantalla cuando accedemos a un sitio web o aplicación:
          tipos de letra, colores, adaptación para distintas pantallas(RWD), los
          efectos del ratón, teclado, movimientos, desplazamientos, efectos
          visuales… y otros elementos que permiten navegar dentro de una página
          web. Este conjunto crea la experiencia del usuario.
        </p>
      </div>
    </a>
  </div>
  <div class="container left">
    <a href="/devpath/BackEnd">
      <div class="content">
        <h2>BackEnd</h2>
        <p>
          El back end del sitio web consiste en un servidor, una aplicación y
          una base de datos. Se toman los datos, se procesa la información y se
          envía al usuario. Los desarrolladores de Front end y Back end suelen
          trabajar juntos para que todo funcione correctamente.
        </p>
      </div>
    </a>
  </div>
  <div class="container right">
    <a href="/devpath/DevOps">
      <div class="content">
        <h2>DevOps</h2>
        <p>
          DevOps (acrónimo inglés de development -desarrollo- y operations
          -operaciones-) es un conjunto de prácticas que agrupan el desarrollo
          de software ( Dev ) y las operaciones de TI ( Ops ). Su objetivo es
          hacer más rápido el ciclo de vida del desarrollo de software y
          proporcionar una entrega continua de alta calidad. DevOps es una
          práctica complementaria al desarrollo de software ágil ; esto debido a
          que varias de las características de DevOps provienen de la
          metodología Agile (término en inglés para la metodologÍa de desarrollo
          ágil).
        </p>
      </div>
    </a>
  </div>
</div>

<!-- {#each techs as tech}
  <p>
    <a href="/tech/{tech.slug}">
      {tech.name}
    </a>
  </p>
{/each} -->
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

  /* Media queries - Responsive timeline on screens less than 600px wide */
  @media screen and (max-width: 600px) {
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
