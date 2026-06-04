import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    
    index("routes/home.tsx"),
    route("/profile","./routes/profile/index.tsx"),
    route("/product","./routes/products/index.tsx"),
    route("/product/:id/:name" , "./routes/products/single.tsx")


] satisfies RouteConfig;
