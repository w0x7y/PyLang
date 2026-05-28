fetch("../components/sidebar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("sidebar-container").innerHTML = data;

        const currentPage =
            window.location.pathname.split("/").pop();

        const navItems =
            document.querySelectorAll(".nav-item");

        navItems.forEach(item => {

            const itemPage =
                item.getAttribute("href").split("/").pop();

            if (currentPage === itemPage) {
                item.classList.add("active");
            }

        });

    });