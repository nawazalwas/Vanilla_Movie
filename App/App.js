import { Body } from "../Body/Body.js";
import { Footer } from "../Header&Footer/Footer.js";
import { Navigation } from "../Header&Footer/Navigation.js";
import { createElement } from "../main.js"





export function App() {

    let appPage;


    function renderDetails(detailspage) {
        appPage.replaceChild(detailspage, appPage.children[1]);
    }

    const div1 = appPage = createElement("div", { class: "app" });

    div1.append(Navigation(), Body(renderDetails), Footer());

    return div1;


}