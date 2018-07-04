$(document).ready(function() {
    $.ajax({
        url: "/views/navigation.html",
        success: function(response) {
            $("#nav-block").html(response);
        }
    });

    switch (window.location.pathname) {
        case "/":
            {
                $("#header-block").show();
                $.ajax({
                    url: "/views/welcome.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/index.html":
            {
                window.location.href = "/";
                break;
            }

        case "/about":
            {
                $.ajax({
                    url: "/views/about.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/services":
            {
                $.ajax({
                    url: "/views/services.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/contact":
            {
                $.ajax({
                    url: "/views/contact.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/portfolio/portfolio-1-col":
            {
                $.ajax({
                    url: "/views/portfolio-1-col.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/portfolio/portfolio-2-col":
            {
                $.ajax({
                    url: "/views/portfolio-2-col.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/portfolio/portfolio-3-col":
            {
                $.ajax({
                    url: "/views/portfolio-3-col.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/portfolio/portfolio-4-col":
            {
                $.ajax({
                    url: "/views/portfolio-4-col.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/portfolio-item":
            {
                $.ajax({
                    url: "/views/portfolio-item.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/blog/blog-home-1":
            {
                $.ajax({
                    url: "/views/blog-home-1.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/blog/blog-home-2":
            {
                $.ajax({
                    url: "/views/blog-home-2.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }

        case "/blog/blog-post":
            {
                $.ajax({
                    url: "/views/blog-post.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/other/full-width":
            {
                $.ajax({
                    url: "/views/full-width.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }

        case "/other/sidebar":
            {
                $.ajax({
                    url: "/views/sidebar.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/other/faq":
            {
                $.ajax({
                    url: "/views/faq.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        case "/other/pricing":
            {
                $.ajax({
                    url: "/views/pricing.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
                break;
            }
        default:
            {
                $.ajax({
                    url: "/views/404.html",
                    success: function(response) {
                        $("#page-block").html(response);
                    }
                });
            }
    }

});