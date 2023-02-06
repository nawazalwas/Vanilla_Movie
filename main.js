import { Body } from "./Body.js";
import { Calender } from "./Calender.js";
import { Carousel } from "./Carousel.js";
import { Details } from "./Details.js";
import { Footer } from "./Footer.js";
import { Navigation } from "./Navigation.js";
import { TheaterHall } from "./TheaterHall.js";

const root = document.getElementById("root");




root.append(Navigation(),Body(),Footer());

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