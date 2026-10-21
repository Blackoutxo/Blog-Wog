<script>
    let open = $state(true);
    let busy = false;

    function toggle() {
        if (busy) return;
        busy = true;
        open = !open;

        setTimeout(() => {
            busy = false;
        }, 1500);
    }

</script>

<main class="main-block">
    
    <!---Nav bar--->
    <nav class:open class:close={!open}>
        <button class="nav-toggle" aria-label={open ? "Open" : "Close"} onclick={toggle}>
            <span class="material-symbols-outlined vanish" class:vanish={open}>menu</span>
        </button>

        <div class="nav-grid">
            <div class="home">Home</div>
            <div class="nav-header" class:vanish={!open}>Blog Wog</div>
            <div class="post">Post</div>
        </div>    
    </nav>

    <!---Posts--->
   <div class="block">
      
   </div>
</main>