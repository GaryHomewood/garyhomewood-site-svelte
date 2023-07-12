import { s as sketches } from "../../../../chunks/sketches.js";
function load({ params }) {
  const sketch = sketches.find((sketch2) => sketch2.slug === params.slug);
  return {
    sketch
  };
}
export {
  load
};
