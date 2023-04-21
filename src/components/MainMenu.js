import { Link } from "react-router-dom";
import { MainMenuContainer } from "../styles/MainMenuContainer"
import { Home } from "../views/Home";

export const MainMenu  = () =>(
    <MainMenuContainer>
    <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">Sobre</Link></li>
    </ul>
</MainMenuContainer>
);

