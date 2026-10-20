<script>
    let open = $state(true);
    let busy = false;

    function toggle() {
        if (busy) return;
        busy = true;
        open = !open;

        setTimeout(() => {}, 100);
    }

    function done(e) {
        if (e.target === e.currentTarget) busy = false;
    } 

</script>

<main class="main-block">
    
    <!---Nav bar--->
    <nav class:open class:close={!open} onclick={toggle} ontransitionend={done}>
        <div class="nav-header" class:vanish={!open}>
            Blog Wog
        </div>
    </nav>

    <!---Posts--->
   <div class="block">
      
   </div>
</main>