<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Navbar page={data.page} folder={data.folder} />
