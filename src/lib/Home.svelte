<script lang="ts">
    import MusicPlayer from './components/MusicPlayer.svelte';
    import Playlist from './components/Playlist.svelte';
    import SearchBar from './components/SearchBar.svelte';
    import { playing_song } from './stores';
    let playlist_id = 4;
    let url = '';
    $: url = `http://localhost:8080/api/music/play/${$playing_song}`;

</script>
<main>
    <MusicPlayer src={url}/>
    <Playlist playlist_id={playlist_id}/>
    <SearchBar/>
</main>