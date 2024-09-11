<script lang="ts">
    import Icon from "@iconify/svelte";
    import { onMount } from 'svelte';
    import Song from './Song.svelte';
    export let playlist_id: number;
    let playlist: any;
    let music: any;
    $: url_playlist = "http://localhost:8080/api/playlists/".concat(playlist_id.toString());
    $: url_playlist_music = "http://localhost:8080/api/playlists/".concat(playlist_id.toString()).concat("/music");

    async function fetchPlaylist() {
        try {
            const res = await fetch(url_playlist);
            if (!res.ok) {
                throw new Error("error fetching audio")
            }
            playlist = await res.json();

        } catch (error){
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    async function fetchPlaylistMusic() {
        try {
            const res = await fetch(url_playlist_music);
            if (!res.ok) {
                throw new Error("error fetching audio")
            }
            music = await res.json();

        } catch (error){
            console.error('There was a problem with the fetch operation:', error);
        }
    }

    

    function secondsToMinutes(seconds: number): string {
        const minutes = Math.floor(seconds / 60); // Get the number of minutes
        const remainingSeconds = Math.floor(seconds % 60);    // Get the remaining seconds
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    onMount(() => {
        fetchPlaylist();
        fetchPlaylistMusic();
    });

    
</script>

<main>

    <div class="p-5 m-5">
        {#if music && playlist}
            <h1>{playlist.name}</h1>
            <p>Number of songs: {music.length}</p>
            {#each music as song, index (song.id)}
                <div class="flex items-center">
                    <p>{index + 1}</p>
                    
                    <Song song={song}/>
                </div>
                
            {/each}
        {:else}
            <Icon icon="eos-icons:three-dots-loading" class="h-60 w-60"/>
        {/if}
    </div>


</main>

