import { BrowserRouter, Route, Routes } from "react-router-dom";
import Presentation from "./pages/Presentation";
import UserSearch from "./pages/UserSearch";
import RepositoriesSearch from "./pages/RepositoriesSearch";
import UserDetails from "./pages/UserDetails";
import RepositoryDetails from "./pages/RepositoryDetails";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Presentation />}></Route>
          <Route path="/UserSearch" element={<UserSearch />}></Route>
          <Route
            path="/RepositoriesSearch"
            element={<RepositoriesSearch />}
          ></Route>
          <Route
            path="/UserSearch/UserDetails/:id/:login"
            element={<UserDetails />}
          ></Route>
          <Route
            path="/RepositoriesSearch/RepositoryDetails/:id/:name/:language/:date"
            element={<RepositoryDetails />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
