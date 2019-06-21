<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"> </script>

<script>
    $(document).ready(function() {
        console.log("loaded");
    $("#sidenav-menu-btn").click(function() {
        console.log("#sidenav-menu-btn--clicked");
    var sidenavContainer = $("#sidenav-container");
    var sidenavContainerChild = sidenavContainer.children[0];
    sidenavContainer.removeClass("MiniSideNav-drawerOpen-2419");
    sidenavContainerChild.removeClass("MiniSideNav-drawerOpen-2419");
    sidenavContainer.addClass("MiniSideNav-drawerClose-2420");
    sidenavContainerChild.addClass("MiniSideNav-drawerClose-2420");
  });
});
</script>
