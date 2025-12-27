// import { type RouteConfig, index } from "@react-router/dev/routes";

// export default [index("routes/home.tsx")] satisfies RouteConfig;

// Create Routing Here
import {
    type RouteConfig,
    route,
    index,
    layout,
    prefix,
} from "@react-router/dev/routes";

export default [
    layout("Layouts/PincipalLayout.tsx", [
        index("routes/home.tsx"),
        route("about", "routes/about.tsx"),
        // route("login", "./auth/login.tsx"),
        // route("register", "./auth/register.tsx"),
    ]),
] satisfies RouteConfig;

