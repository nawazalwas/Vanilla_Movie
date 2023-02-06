import { Body } from "./Body/Body.js";
import { Details } from "./Details/Details.js";
import { Navigation } from "./Header&Footer/Navigation.js";
import { Footer } from "./Header&Footer/Footer.js";
import { TheaterHall } from "./TheaterHall/TheaterHall.js";

const root = document.getElementById("root");




root.append(Navigation(),TheaterHall(),Footer());

export function createElement(tag, attr = {}) {
    const ele = document.createElement(tag);
    for (const key in attr) {
        if (key === "className") {
            ele.setAttribute("class", attr[key]);
            continue;
        }
        ele.setAttribute(key, attr[key]);
    }

    return ele;
}

console.log(Navigation());