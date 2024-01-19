<script lang="ts">
    export let slug: String;
    export let folder: String = '';
    export let showFolder: Boolean = false;
    export let tags: String[] = [];
</script>

<div class="row">
    <a href={`${folder ? '/' + folder : ''}/${slug}`}>{showFolder ? `${folder}/${slug}` : slug}</a>
    <!-- TODO: Implement last edit -->
    <span class="last-edit">0 hours ago</span>
    <div class="tag-container">
        {#each tags as tag}
            <a class="tag" href={`/tag/${tag}`}>{tag}</a>
        {/each}
    </div>
</div>

<style>
    .row {
        display: flex;
        flex-direction: row;
    }

    .last-edit {
        font-style: italic;
        margin: 0 1rem;
    }

    .tag {
        margin-right: 0.5rem;
        color: var(--text-color);
        text-decoration: underline;
    }
</style>
