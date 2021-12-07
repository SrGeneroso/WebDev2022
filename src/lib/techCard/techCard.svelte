<script>
    import {fly} from 'svelte/transition'
    export let slug
    export let image {url, name}
</script>

<a href="/tech/{slug}" in:fly="{{ y: 200, duration: 500 , delay:i*100}}" >
      <div class="card">
        <div class="card-header">
          <img src={tech.image.url} alt={tech.image.name} />
        </div>
        <div class="card-body">
          <h4>{tech.name}</h4>
          <p>{tech.descShort}</p>
        </div>
      </div>
    </a>