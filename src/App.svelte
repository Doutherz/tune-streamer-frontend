<script lang="ts">
	import { Router, Route } from "svelte-routing";
	import Home from "./lib/Home.svelte";
    import Login from "./lib/components/Login.svelte";
    import NavBar from "./lib/components/NavBar.svelte";
</script>

<main>
	<div class="flex items-center justify-center min-h-screen bg-custom-svg bg-no-repeat bg-center h-screen w-screen bg-cover">
		<div class="backdrop-blur-lg bg-white/50 rounded-xl overflow-hidden size-4/6 shadow-lg shadow-black">
			<NavBar/>
			<Router>
				<Route path="/" component={Home} />
				<Route path="/auth" component={Login} />
			</Router>
		</div>
		
	</div>
</main>
