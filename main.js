import { App } from "./App/App.js";

export const root = document.getElementById("root");



root.append(App("home"));

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

