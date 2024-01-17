<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Navbar folder={data.folder} />

<h1>hi joe</h1>
