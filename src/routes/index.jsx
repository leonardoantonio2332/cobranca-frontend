import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { isAuthenticated } from '../permission/auth.jsx'
import { checkAccess } from '../permission/permission.jsx'

import { Login } from "../pages/Login";
import  Home  from "../pages/Home";
// import { Home } from "../pages/Home";
// import { Register } from "../pages/Register";
// import { Query } from "../pages/Query";
// import { QueryDescription } from "../pages/Query/queryDescription.jsx";
// import { Logout } from "../pages/Logout";

export const AppRouter = () => {
    
    function RequireAuth({ children }) {
        const authed  = isAuthenticated();
        return authed ? children : <Navigate to="/login" replace />;
    }

    return (
        <Router>
        <Routes>
            <Route exact path="/login" element={<Login /> } />
            <Route exact path="/" element={<Home /> } />
            {/* <Route exact path="/logout" element={<Logout /> } />
            <Route exact path="/register" element={<RequireAuth> <Register /> </RequireAuth>} />
            <Route exact path="/query" element={<RequireAuth> <Query /> </RequireAuth>} />
            <Route exact path="/query-description/:id" element={<RequireAuth><QueryDescription /> </RequireAuth>} />
            <Route exact path="/update/:id/:role" element={<RequireAuth> <Register /> </RequireAuth>} />
            <Route exact path="/" element={<RequireAuth> <Home /> </RequireAuth>} /> */}
        </Routes>
        </Router>
    );
};
