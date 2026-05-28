fetch("../components/sidebar.html")
    .then(response => response.text())
    .then(data => {

        document.getElementById("sidebar-container").innerHTML = data;

        // Get current folder (Learn / Code / Shop / Profile)
        const pathParts = window.location.pathname
            .split("/")
            .filter(Boolean);

        let currentPage = pathParts.pop();

        if (currentPage === "index.html") {
            currentPage = pathParts.pop();
        }

        const navItems = document.querySelectorAll(".nav-item");

        navItems.forEach(item => {

            const hrefParts = item.getAttribute("href")
                .split("/")
                .filter(Boolean);

            let itemPage = hrefParts.pop();

            if (itemPage === "index.html") {
                itemPage = hrefParts.pop();
            }

            if (currentPage === itemPage) {
                item.classList.add("active");
            }

        });

    });