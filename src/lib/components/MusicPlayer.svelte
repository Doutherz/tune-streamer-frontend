<script lang="ts">
    import Icon from "@iconify/svelte";

    export let src: string;
    let isPlaying: boolean = false;
    let audioElemnt: HTMLAudioElement;
    let currntTime: number = 0;
    let duration: number = 0;
    let audioUrl = '';
    let loaded = false;

    function secondsToMinutes(seconds: number): string {
        const minutes = Math.floor(seconds / 60); // Get the number of minutes
        const remainingSeconds = Math.floor(seconds % 60);    // Get the remaining seconds
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    }

    //work arround for my backend cause it can only send hole mp3 file not partial content
    async function fetchAudio(src: string) {
        loaded = false
        try {
            
            const res = await fetch(new URL(src));
            if (!res.ok) {
                throw new Error("error fetching audio")
            }
            const audioBlob = await res.blob();
            audioUrl = URL.createObjectURL(audioBlob);
            loaded = true;
            isPlaying = true;
        } catch (error){
            console.error('There was a problem with the fetch operation:', error);
            loaded = false
        }
    }

    function togglePlay(): void {
        if (isPlaying) {
            audioElemnt.pause();
        } else {
            audioElemnt.play();
        }
        isPlaying = !isPlaying;
    }

    function handleMetaData(): void {
        if (audioElemnt) {
            duration = audioElemnt.duration;
        }
    }

    function updateTime(): void {
        if (audioElemnt) {
            currntTime = audioElemnt.currentTime;
        }
    }

    function handleSeek(event: Event): void {
        const target = event.target as HTMLInputElement;
        const seekTime = parseFloat(target.value);
        audioElemnt.currentTime = seekTime;
    }

    function handleInput(event: KeyboardEvent) {
        if (event.code === "Space") {
            togglePlay();
        } 
    }

    $: fetchAudio(src);

        import { onMount, onDestroy } from 'svelte';
    onMount(() => {
        window.addEventListener('keydown', handleInput);
    });

    onDestroy(() => {
        window.removeEventListener('keydown', handleInput);
    });
</script>

<main>
    <div class="p-2 w-fit h-fit rounded-md  text-white bg-gray-900">
        <audio
        bind:this={audioElemnt}
        on:loadedmetadata={handleMetaData}
        on:timeupdate={updateTime} 
        autoplay
        src = {audioUrl}>
        </audio>
        <div>
            <div class="flex justify-center items-center">
                {#if loaded!=false}
                    <Icon icon="flowbite:backward-step-outline" class="size-10"/>
                    <button on:click={togglePlay} class="text-center">
                        {#if !isPlaying}
                            
                            <Icon icon="mdi:play-outline" class="size-10 hover:size-16 transition-all m-3 hover:m-0"/>
                            
                        {:else}
                            <Icon icon="material-symbols:pause-outline" class="size-10 hover:size-16 transition-all m-3 hover:m-0"/>
                        {/if}
                        
                    </button>
                    <Icon icon="flowbite:forward-step-outline" class="size-10"/>
                    <Icon icon="mi:shuffle" class="size-7"/>
                    <Icon icon="ph:speaker-simple-high-bold" class="ml-auto size-6"/>
                {:else}
                    <Icon icon="line-md:loading-loop" class="size-16"/>
                {/if}
                

            </div>

            <div class="flex">
                <p class="mx-2">{secondsToMinutes(currntTime)}</p>
                <input type="range" min="0" max={duration} value={currntTime} on:input={handleSeek} class="w-60 slider"/>
                <p class="mx-2">{secondsToMinutes(duration)}</p>
            </div>
            
        </div>
    </div>
</main>

