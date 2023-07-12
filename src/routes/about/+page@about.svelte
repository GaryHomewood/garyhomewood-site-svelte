<script>
import './styles.css';
</script>

<svelte:head>
  <title>About - Gary Homewood</title>
  <meta name="description" content="About this portfolio" />
</svelte:head>

<div class="text-column">
  <h1>About me</h1>
  <p>I'm a London based coder/artist, interested in generative art, mostly using <a href="https://p5js.org/">p5.js</a>. This is a small sample of some sketches.</p>
  <h2>Contact</h2>
  <ul>
    <li>
      <a href="https://twitter.com/GaryHomewood">Twitter</a> where I post all my generative art and work in progress.
    </li>
    <li>
      <a href="https://instagram.com/GaryHomewood">Instagram</a> mostly street photography and abstract, often black and white with too much contrast.
    </li>
    <li>
      <a href="https://www.goodreads.com/review/list/1330893">Goodreads</a> every work of fiction I've ever read, rated, with a pithy review.
    </li>
    <li>
      <a href="https://github.com/GaryHomewood">Github</a> for all the hacked together code learning.
    </li>
    <li>
      <a href="https://www.linkedin.com/in/garyhomewooduk/">LinkedIn</a> where I try to maintain a semblance of professionalism.
    </li>
  </ul>
  <h2>Colophon</h2>
  <p>Built with</p>
  <ul>
    <li>
      <a href="https://svelte.dev/">Svelte</a>
    </li>
    <li>
      <a href="https://sveltematerialui.com/">Svelte Material UI</a>
    </li>
    <li>
      <a href="https://p5js.org/">p5.js</a>
    </li>
  </ul>
</div>

<style>
.text-column {
  line-height: 1.6;
  max-width: 464px;
  margin: 40px 16px;
  position: relative;
}

@media (max-width: 480px) {
  .text-column {
    margin-top: 76px
  }
}

ul {
  padding-left: 20px;
}

li::marker {
  content: '->';
  font-family: var(--mdc-typography-font-family);
}

li:before {
  content: "\00a0";
  width: 20px;
}

a {
  text-decoration-color: rgba(255, 0, 0, 0.5);
  text-decoration-style: dashed;
  text-decoration-thickness: 1.5px;
  text-underline-offset: 3px;
}

a:link {
  color: rgba(255, 0, 0, 0.75);
}

a:hover,
a:visited {
  color: rgba(255, 0, 0, 1);
  text-decoration-color: rgba(255, 0, 0, 1);
}
</style>
