<script>
import { sketches } from '$lib/data/sketches'
import IconButton from '@smui/icon-button';
import Drawer, {
  Content,
  Header,
  Title,
  Subtitle,
  } from '@smui/drawer';
import List, { 
  Item,
  Text,
  Separator,
 } from '@smui/list';
import { page } from '$app/stores'
import { onMount } from 'svelte';

const url = $page.url.href
const slug = url.substring(url.lastIndexOf('/') + 1)
let open = false;
let active = slug;

function setActive(value) {
  active = value;
  open = false;
}

onMount(() => {
  // Set up swipe to open drawer
  const bodyElement = document.getElementsByTagName('body')
  const mc = new Hammer(bodyElement.item(0))
  mc.on("panright", () => open = true );
})
</script>

<IconButton class="material-icons drawer-button" on:click={() => (open = !open)}>menu</IconButton>
<Drawer variant="modal" fixed={false} bind:open>
  <Header>
    <Title>Gary Homewood</Title>
    <Subtitle>A portfolio</Subtitle>
  </Header>
  <div data-sveltekit-reload>
    <Content>
      <List>
        <Item
          href="/"
          on:click={() => setActive('Home')}
          activated={active === ''}
          >
        <Text>Home</Text>
        </Item>
        <Item
          href="/about"
          on:click={() => setActive('About')}
          activated={active === 'about'}
          >
          <Text>About</Text>
        </Item>
        <Separator />
        {#each sketches as {slug, name} }
        <Item
          href="/sketch/{slug}"
          on:click={() => setActive({slug})}
          activated={active === slug}
          class="list-item__thumb"
          color="secondary"
          >
          <img src="/img/{slug}-thumb.png" width="64px" height="107px" alt="sketch {name} thumbnail" />
          <Text>{name}</Text>
        </Item>
        {/each}
      </List>
    </Content>
    <Separator />

  </div>
  <footer>
    <p>Reload page to redraw</p>
  </footer>
</Drawer>

<style>
footer {
  bottom: 0;
  color: var(--mdc-theme-primary);
  color: white;
  font-family: var(--mdc-typography-subtitle2-font-family, var(--mdc-typography-font-family, Roboto,));
  font-size: var(--mdc-typography-subtitle2-font-size, 0.875rem);
  font-weight: var(--mdc-typography-subtitle2-font-weight, 500);
  position: absolute;
  right: 16px;
}  
</style>
