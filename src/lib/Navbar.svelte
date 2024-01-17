<script lang="ts">
    import PathDisplay from './PathDisplay.svelte';

    export let page: String = "";
    export let folder: String = "";
</script>

<nav class="navbar">
    <p class="nav-title">🐸 frog</p>
    <PathDisplay {page} {folder} />
</nav>

<style>
    .navbar {
        width: 100%;
        display: flex;
        flex-direction: row;
    }

    .nav-title {
        font-family: 'Rubik', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        font-size: 4rem;
        color: #FFFFFF;
        margin: 0;
    }
</style>
