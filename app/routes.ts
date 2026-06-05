import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    index("routes/home.tsx"),
   
    route("/product","./routes/products/index.tsx"),
    route("/product/:id" , "./routes/products/single.tsx"),
    route("/login", "./routes/auth/login/index.tsx"),
    route("/useEffect", "./routes/getData/useEffect.tsx"),
    route("/posts", "./routes/getData/getPost.tsx"),
    route("/testRef", "./routes/getDom/useRefHook.tsx"),
    route("/form", "./routes/form/formPage.tsx"),
    route("/list", "./routes/todo/ListTodo.tsx"),
    route("/add", "./routes/todo/AddTodo.tsx"),


    route("/zustand/list", "./routes/zustand/ListTodo.tsx"),
    route("/zustand/add", "./routes/zustand/AddTodo.tsx"),


    route("/redux/list", "./routes/redux/ListTodo.tsx"),
    route("/redux/add", "./routes/redux/AddTodo.tsx"),




    route("/optimize", "./routes/optimization/index.tsx"),


    layout("./components/Auth/ProtectedRoute.tsx", [
         route("/profile","./routes/profile/index.tsx"),
    ])


] satisfies RouteConfig;
