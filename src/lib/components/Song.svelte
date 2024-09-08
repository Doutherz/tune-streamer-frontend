<script lang="ts">
    import Icon from "@iconify/svelte";
    import { playing_song } from "../stores";
    export let song: any;

    function change_song(id: number): void {
        playing_song.set(id);
    }

    function secondsToMinutes(seconds: number): string {
        const minutes = Math.floor(seconds / 60); // Get the number of minutes
        const remainingSeconds = Math.floor(seconds % 60);    // Get the remaining seconds
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }
</script>

<main>
    <div class="flex items-center border-2 hover:shadow-gray-500 transition-all border-black rounded-md m-2 p-2 drop-shadow-2xl shadow-lg shadow-gray-400 hover:bg-slate-100">
        {#if $playing_song != song.id}
            <button on:click={() => change_song(song.id)}><Icon icon="mdi:play-circle-outline" class="size-8"/></button>
        {:else}
        <Icon icon="svg-spinners:bars-scale-middle" class="size-8"/>
        {/if}
        
        <p class="mx-3">{song.title}</p>
        <p class="mx-3">{song.artist}</p>
        <p class="mx-3">{secondsToMinutes(song.duration)}</p>
    </div>
</main>