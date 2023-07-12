<script>
import { onMount } from 'svelte';
import { palettes } from '$lib/data/palettes'
import CircularProgress from '@smui/circular-progress';
import Card from '$lib/components/Card.svelte';

onMount(async () => {
  // Global array of nice palettes
  if (window) {
    window.P5 = {
      palettes,
    }
  }

  const sketch = document.createElement('script');
  sketch.id = 'script-sketch'
  sketch.src = `/sketches/home-sketch.js`;
  document.body.appendChild(sketch);
  closed = true
  showCard = true
})

let closed = false
let showCard = false
</script>

<svelte:head>
	<title>Gary Homewood</title>
	<meta name="description" content="A portfolio" />
</svelte:head>

<section>
	<div id='sketch-canvas'>
    <CircularProgress class="sketch-loading" style="height: 48px; width: 48px;" indeterminate {closed} />
  </div>
  <div class="sketch-card">
    {#if showCard}
    <Card />
    {/if}
  </div>
</section>

<style>
section {
  position: relative;
}

.sketch-card {
  position: absolute;
  top: 20%;
  left: calc(50% - 123px); /* hack based on width of card */ 
}
</style>
