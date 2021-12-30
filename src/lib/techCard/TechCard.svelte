<script>
    import {fly} from 'svelte/transition'
    export let tech
    export let i
</script>
  <a href="/tech/{tech.slug}" in:fly="{{ y: 200, duration: 500 , delay:i*100}}" >
    <div class="card">
      <div class="card-header">
        <img src={tech.image.url} alt="Logotipo de {tech.name}" />
      </div>
      <div class="card-body">
        <h3>{tech.name}</h3>
        <p>{tech.descShort}</p>
      </div>
    </div>
  </a>

<style>

a:hover{
  transform: scale(1.05);
}


.card {
  margin: 0.5rem;
  background-color: var(--secondary-color);
  border-radius: 10px;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  width: 15em;
  
}

.card-header{
  display: flex;
  justify-content: center;
}

.card-header img {
  width: 90%;
  height: 500;
  margin-top: 1rem;
  border-radius: 5%;
  
}
.card-body {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px;
  min-height: 250px;
}

.card-body p {
  margin: 0 0 40px;
}


</style>