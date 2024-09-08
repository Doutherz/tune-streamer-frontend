<script lang="ts">
  import { Router, Route, Link } from 'svelte-routing';
  import Home from './lib/Home.svelte';
  import Login from './lib/Login.svelte';
</script>

<main>
  <h1>Tune-Streamer</h1>
  <div>
    <Router>
      <Route path="/" component={Home} />
      <Route path="/login" component={Login} />
    </Router>
  </div>
</main>

<style>
  
</style>
