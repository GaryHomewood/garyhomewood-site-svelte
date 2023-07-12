import { sketches } from '$lib/data/sketches'

export function load({params}) {
  const sketch = sketches.find((sketch) => sketch.slug === params.slug)
  return {
    sketch
  };
}
