const app = document.getElementById("app");
const routerScript = document.currentScript;
const appBase = new URL(".", routerScript.src).pathname.replace(/\/$/, "");
const transitionDuration = 180;
let routeRequestId = 0;

const routes = {
    "/Learn": `${appBase}/pages/learn.html`,
    "/Code": `${appBase}/pages/code.html`,
    "/Shop": `${appBase}/pages/shop.html`,
    "/Profile": `${appBase}/pages/profile.html`,
};

fetch(`${appBase}/components/sidebar.html`)
    .then(r => r.text())
    .then(html => {
        document.getElementById("sidebar-container").innerHTML = html;
        attachNavHandlers();
        route(location.pathname);
    });

function attachNavHandlers() {
    document.querySelectorAll(".nav-item").forEach(item => {
        item.addEventListener("click", (e) => {
            e.preventDefault();

            const path = item.getAttribute("href");

            history.pushState({}, "", path);
            route(path);
        });
    });
}

async function route(fullPath) {
    const requestId = ++routeRequestId;
    const path = normalize(fullPath);
    const routeKey = resolveRoute(path) || "/Learn";

    highlightActive(path);

    app.classList.add("is-leaving");
    await wait(transitionDuration);

    if (requestId !== routeRequestId) {
        return;
    }

    const page = routes[routeKey];

    const res = await fetch(page);
    const html = await res.text();

    if (requestId !== routeRequestId) {
        return;
    }

    app.className = `route-${routeKey.replace("/", "").toLowerCase()} is-entering`;
    app.innerHTML = html;
    await executePageScripts(app);
    requestAnimationFrame(() => {
        app.classList.remove("is-entering");
    });
}

function normalize(url) {
    const path = url
        .split("?")[0]
        .split("#")[0]
        .replace(/\/$/, "");

    if (!path || path === appBase || path === `${appBase}/app.html`) {
        return "/Learn";
    }

    return path.startsWith(`${appBase}/`)
        ? path.slice(appBase.length)
        : path;
}

function resolveRoute(path) {
    return Object.keys(routes).find(routePath =>
        path === routePath || path.startsWith(`${routePath}/`)
    );
}

function highlightActive(currentPath) {
    document.querySelectorAll(".nav-item").forEach(item => {
        const route = item.dataset.route;

        if (currentPath.startsWith(route)) {
            item.classList.add("active");
        } else {
            item.classList.remove("active");
        }
    });
}

async function executePageScripts(container) {
    const scripts = Array.from(container.querySelectorAll("script"));

    for (const script of scripts) {
        const executable = document.createElement("script");

        Array.from(script.attributes).forEach(attribute => {
            executable.setAttribute(attribute.name, attribute.value);
        });

        await new Promise((resolve, reject) => {
            executable.onload = resolve;
            executable.onerror = reject;
            executable.textContent = script.textContent;
            script.replaceWith(executable);

            if (!executable.src) {
                resolve();
            }
        });
    }
}

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

window.addEventListener("popstate", () => {
    route(location.pathname);
});
