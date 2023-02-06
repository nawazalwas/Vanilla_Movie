import { createElement } from "../main.js";

const login = function(){
    console.log("Please log in");
}

export function Login(){
    {/* <div class="login" id="in">
        <input type="text"/>
    </div> */}
    const div = createElement("div",{class:"login",id:"in"});
    {
        const input = createElement("input",{type:"text"});
        div.append(input);

    }
    {
        const input = createElement("input",{type:"number"});
    }

    return div;
}