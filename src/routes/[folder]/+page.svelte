<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import type { PageData } from './$types';
    import '$lib/globals.css';
    import Row from '$lib/Row.svelte';

    export let data: PageData;
</script>

<Navbar folder={data.folder} />

<h1>Pages</h1>

{#each data.pages as page}
    <Row slug={page.slug} folder={data.folder} tags={page.tags} />
{/each}
