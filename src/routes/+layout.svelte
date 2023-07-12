<script>
import './styles.css';
import {
  AppContent,
  Scrim,
} from '@smui/drawer';
import Drawer from '$lib/components/Drawer.svelte';
</script>

<div class="app">
  <Drawer></Drawer>
  <Scrim fixed={false} />
  <AppContent class="app-content">
    <main class="main-content">
      <slot />
    </main>
  </AppContent>
</div>

<style>
.app {
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
}

main {
  flex: 1;
  display: flex;
  flex-direction: column;
  font-family: var(--mdc-typography-font-family);
  padding: 1rem;
  width: 100%;
  max-width: 64rem;
  margin: 0 auto;
  box-sizing: border-box;
  min-height: 100dvh;
  justify-content: center;
}

@media (max-width: 480px) {
  .app,
  main {
    background: black !important;
  }
}
</style>
