<script lang="ts">
	import { Router, Route, Link } from "svelte-routing";
	import Home from "./lib/Home.svelte";
	import Login from "./lib/Login.svelte";
</script>

<main>
	<div class="flex items-center justify-center min-h-screen bg-custom-svg bg-no-repeat bg-center h-screen w-screen bg-cover">
		<div class="backdrop-blur-lg bg-white/50 rounded-xl overflow-hidden size-4/6 shadow-lg shadow-black">
			<Router>
				<Route path="/" component={Home} />
				<Route path="/login" component={Login} />
			</Router>
		</div>
		
	</div>
</main>
