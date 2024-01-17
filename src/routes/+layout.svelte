<script lang="ts">
    import '$lib/globals.css';
</script>

<style>
    .navbar {
        width: 100%
    }

    .nav-title {
       font-family: 'Rubik', 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
       font-weight: 700;
       font-size: 4rem;
       margin: 0;
    }

    .container {
        margin-left: 30%;
        margin-right: 30%;
    }
</style>

<div class="container">
    <nav class="navbar">
        <p class="nav-title">🐸 frog</p>
    </nav>
    <slot></slot>
</div>
