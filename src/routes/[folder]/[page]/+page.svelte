<script lang="ts">
    import Navbar from '$lib/Navbar.svelte';
    import type { PageData } from './$types';

    export let data: PageData;
</script>

<Navbar page={data.page} pageName={data.pageName} folder={data.folder} />
