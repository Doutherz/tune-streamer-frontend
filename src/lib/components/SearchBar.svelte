<script lang="ts">
    import Song from './Song.svelte';
    import Icon from '@iconify/svelte';

    let query: string = "";
    let search_results: any;
    let loaded: boolean = false;

    async function search_music() {
        loaded = false;
        if (query === "") {return}
        try {
            const res = await fetch(`http://localhost:8080/api/music/search?q=${query}`);
            if (!res.ok) {
                throw new Error("error fetching search results")
            }
            search_results = await res.json();
            loaded = true;

        } catch (error){
            console.error('There was a problem with the fetch operation:', error);
        }
    }

</script>

<main>
    <div class="flex items-center rounded-full border-black border-2 w-fit">
        <Icon icon="ion:search" class="size-12 p-3"/>
        <input type="text" bind:value={query} on:input={search_music} class="border-b-2 border-black mx-2 select-all outline-none bg-white/0">
    </div>
    <div>
        {#if loaded}
        {#each search_results as song (song.id)}
            <div class="flex items-center">
                <Song song={song}/>
            </div>     
        {/each}
        {:else if query === ""}
                <div></div>
        {:else}
            <Icon icon="svg-spinners:12-dots-scale-rotate" class="size-20"/>
        {/if}
    </div>
    
    
</main>