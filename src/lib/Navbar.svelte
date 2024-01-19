<script lang="ts">
    import PathDisplay from './PathDisplay.svelte';

    export let page: String = '';
    export let pageName: String = '';
    export let folder: String = '';
</script>

<nav class="navbar">
    <div class="container" id="top">
        <a class="nav-title" href="/">🐸 frog</a>
        <PathDisplay {page} {pageName} {folder} />
    </div>
    <div class="container">
        <a class="link" id="first-link" href="/">home</a>
        <a class="link" href="https://michaelzhao.xyz">about me</a>
        <a class="link" href="/admin">admin</a>
    </div>
</nav>

<style>
    .navbar {
        width: 100%;
    }

    .nav-title {
        font-family: 'Rubik', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 700;
        font-size: 2.5rem;
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

    .link {
        margin: 0 1rem;
        text-decoration: none;
        color: var(--primary);
        font-size: 1.5rem;
        transition-duration: 200ms;
    }

    .link:hover {
        filter: brightness(1.5);
    }

    #first-link {
        margin-left: 0;
    }

    .container {
        display: flex;
        flex-direction: row;
    }

    #top {
        margin-bottom: 1rem;
    }
</style>
