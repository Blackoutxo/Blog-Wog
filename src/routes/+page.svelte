<script>
    let open = $state(true);
</script>

<main class="main-block">
    
    <!---Nav bar--->
    <nav class:open class:close={!open} onclick={() => (open = !open)}>
        <div class="nav-header" class:vanish={!open}>
            Blog Wog
        </div>
    </nav>

    <!---Posts--->
   <div class="block">
      
   </div>
</main>