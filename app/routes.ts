import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    index("routes/home.tsx"),
   
    route("/product","./routes/products/index.tsx"),
    route("/product/:id" , "./routes/products/single.tsx"),
    route("/login", "./routes/auth/login/index.tsx"),
    route("/useEffect", "./routes/getData/useEffect.tsx"),
    route("/posts", "./routes/getData/getPost.tsx"),

    layout("./components/Auth/ProtectedRoute.tsx", [
         route("/profile","./routes/profile/index.tsx"),
    ])


] satisfies RouteConfig;
