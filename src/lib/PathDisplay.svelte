<script lang="ts">
    export let page: String;
    export let folder: String;
</script>

<div class="path">
    {#if folder !== ''}
        <div class="divider">/</div>
        <div>{folder}</div>
    {/if}
    {#if page !== ''}
        <div class="divider">/</div>
        <div>{page}</div>
    {/if}
</div>

<style>
    .path {
        font-family: 'Rubik', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        font-weight: 400;
        font-size: 4rem;
        color: #aaaaaa;
        margin: 0;
        display: flex;
        flex-direction: row;
    }

    .divider {
        margin: 0 1rem;
    }
</style>
