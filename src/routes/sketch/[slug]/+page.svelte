<script lang='ts'>
import { onMount } from 'svelte';
import { palettes } from '$lib/data/palettes'
import CircularProgress from '@smui/circular-progress';

export let data;

onMount(async () => {
  // Global array of nice palettes
  if (window) {
    window.P5 = {
      palettes,
    }
  }

  const sketch = document.createElement('script');
  sketch.id = 'script-sketch'
  sketch.src = `/sketches/${data.sketch?.slug}.js`;
  document.body.appendChild(sketch);
  closed = true
})

let closed = false
</script>

<svelte:head>
  <title>{data.sketch?.name} - Gary Homewood</title>
  <meta name="description" content="Sketch {data.sketch?.name}" />
</svelte:head>

<div id='sketch-canvas'>
  <CircularProgress class="sketch-loading" style="height: 48px; width: 48px;" indeterminate {closed} />
</div>
