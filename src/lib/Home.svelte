<script lang="ts">
    import MusicPlayer from './components/MusicPlayer.svelte';
    import Playlist from './components/Playlist.svelte';
    import SearchBar from './components/SearchBar.svelte';
    let playlist_id = 4;

</script>
<main>
    
    <Playlist playlist_id={playlist_id}/>
    <SearchBar/>
    <div class=" absolute bottom-0 w-full pointer-events-none">
        <div class="flex justify-center">
            <MusicPlayer/>
        </div>
    </div>
</main>