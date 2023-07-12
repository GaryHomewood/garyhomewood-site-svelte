<script>
import './styles.css';
</script>

<main class="main-content">
  <slot />
</main>

<style>
main {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  flex: 1;
  font-family: var(--mdc-typography-font-family);
  justify-content: start;
  margin: 0 auto;
  max-width: 64rem;
  min-height: 100dvh;
  padding: 1rem;
  width: 100%;
}

@media (max-width: 480px) {
  main {
    background: white !important;
  }
}
</style>
