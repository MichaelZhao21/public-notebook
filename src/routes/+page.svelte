<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import Row from '$lib/Row.svelte';
    import type { PageData } from './$types';
    
    export let data: PageData;
</script>

<Navbar />

<p class="about">
    Welcome to my public notebook! This is just somewhere that I dump my thoughts and ideas. Feel
    free to look around :D
</p>

<h1>Recent</h1>

<h1>Directory</h1>

{#each data.folders as folder}
    <Row slug={folder.slug} />
{/each}

<style>
    .about {
        font-size: 1.25rem;
    }
</style>