<script>
    import Icon from "@iconify/svelte";
    import { is_logged_in } from "../stores";
</script>
<main>
    <header class="flex mx-72 min-w-fit bg-primary rounded-b-lg justify-evenly p-2">
        
        <a href="/music" class="group flex flex-col items-center justify-center">
            <Icon icon="solar:music-note-2-broken" class="p-1 size-12 text-secondary transition-all hover:bg-white hover:text-black rounded-full"/>
            <div class="text-white translate-y-12 mt-3 shadow-md shadow-black absolute bg-primary rounded-lg p-2 group-hover:opacity-100  opacity-0 transition-all pointer-events-none">
                <p>Music</p>
            </div>
        </a>
        <a href="/" class="group flex flex-col items-center justify-center">
            <Icon icon="iconamoon:home" class="p-1 size-12 text-secondary transition-all hover:bg-white hover:text-black rounded-full"/>
            <div class="text-white translate-y-12 mt-3 shadow-md shadow-black absolute bg-primary rounded-lg p-2 group-hover:opacity-100  opacity-0 transition-all pointer-events-none">
                <p>Home</p>
            </div>
        </a>
        {#if $is_logged_in === 1}
            <a href="/profile" class="group flex flex-col items-center justify-center">
                <Icon icon="iconamoon:profile" class="p-1 size-12 text-secondary transition-all hover:bg-white hover:text-black rounded-full"/>
                <div class="text-white translate-y-12 mt-3 shadow-md shadow-black absolute bg-primary rounded-lg p-2 group-hover:opacity-100  opacity-0 transition-all pointer-events-none">
                    <p>Profile</p>
                </div>
            </a>
        {:else }
        <a href="/auth" class="group flex flex-col items-center justify-center">
            <Icon icon="ic:round-login" class=" p-1 size-12 text-secondary transition-all hover:bg-white hover:text-black rounded-full"/>
            <div class="text-white translate-y-12 mt-3 shadow-md shadow-black absolute bg-primary rounded-lg p-2 group-hover:opacity-100  opacity-0 transition-all pointer-events-none">
                <p>Login</p>
            </div>
        </a>
        {/if}
        
        
        
    </header>
</main>