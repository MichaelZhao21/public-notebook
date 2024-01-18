<script lang="ts">
    import PathDisplay from './PathDisplay.svelte';

    export let page: String = '';
    export let pageName: String = '';
    export let folder: String = '';
</script>

<nav class="navbar">
    <a class="nav-title" href="/">🐸 frog</a>
    <PathDisplay {page} {pageName} {folder} />
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
        font-size: 2rem;
        color: #ffffff;
        margin: 0;
        display: inline-block;
        white-space: nowrap;
        text-decoration: none;
        transition-duration: 200ms;
    }

    .nav-title:hover {
        color: var(--primary);
    }
</style>
