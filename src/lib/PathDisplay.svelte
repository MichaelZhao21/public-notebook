<script lang="ts">
    export let page: String;
    export let pageName: String;
    export let folder: String;

    const copyPath = () => {
        navigator.clipboard.writeText(`${window.location.origin}/${folder}/${page}`);
        alert('Link to page copied!');
    };
</script>

<div class="path">
    {#if folder !== ''}
        <div class="divider">/</div>
        <a class="folder-link" href={'/' + folder}>{folder}</a>
    {/if}
    {#if page !== ''}
        <div class="divider">/</div>
        <button on:click={copyPath} class="page-link">{pageName}</button>
    {/if}
</div>

<style>
    .path {
        font-family: 'Rubik', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        font-size: 2.5rem;
        color: var(--light-text);
        margin: 0;
        display: flex;
        flex-direction: row;
    }

    .folder-link {
        color: inherit;
        text-decoration: none;
        transition-duration: 200ms;
    }

    .folder-link:hover {
        color: var(--primary);
    }

    .page-link {
        border: none;
        background-color: transparent;
        color: inherit;
        font: inherit;
        padding: 0;
        text-align: left;
        cursor: pointer;
        transition-duration: 200ms;
    }

    .page-link:hover {
        color: var(--primary);
    }

    .divider {
        margin: 0 1rem;
    }
</style>
