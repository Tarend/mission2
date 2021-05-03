import {BrowserRouter, Route, Switch} from "react-router-dom"

import About from "../pages/about";
import NotMatch from "../pages/NotMatch";
import IndexPage from "../pages/IndexPage";
import NavBar from "./NavBar";
import ListeAtelier from "./ListeAtelier";
import ListeBoisson from "./ListeBoisson";
import Atelier from "./Atelier";
import Boisson from "./Boisson";

const RouteMission2 = props => {
    return (
        <BrowserRouter>
            <NavBar/>

            <Route path="/atelier/:id">
                <Atelier/>
            </Route>

            <Route path="/boisson/:id">
                <Boisson/>
            </Route>

            <Switch>

                <Route path="/boisson">
                    <ListeBoisson/>
                </Route>

                <Route path="/atelier">
                    <ListeAtelier/>
                </Route>

                <Route path="/about">
                    <About/>
                </Route>

                <Route path="/">
                    <IndexPage/>
                </Route>

                <Route path="*">
                    <NotMatch/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}
export default RouteMission2
