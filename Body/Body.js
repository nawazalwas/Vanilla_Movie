import { createElement } from "../main.js";
import { database } from "../api.js";
import { Carousel } from "../Carousel/Carousel.js";
import { Details } from "../Details/Details.js";




export function Body(renderDetails) {
    let banner;
    function handleBanner(img){
        banner.style.backgroundImage = `url(${img})`;

    }
    
    const div1 = createElement("div", { class: "body" });
    {
        const div2$1 = createElement("div", { class: "banner" });
        {
            const div3 = createElement("div",{class:"banner_container"});
            {
                const div4 = banner = createElement("div",{class:"banner_container_img",style:`background-image:url(${"images/banner/Marvels-Avengers.webp"})`});
                div3.append(div4);
            }
            div2$1.append(div3);

        }
        const div2$2 = createElement("div", { class: "catalog" });
        {
            let bannerArr = [{ title: "Trending", moviesList: database }, { title: "Upcoming", moviesList: database }, { title: "Romantic", moviesList: database }, { title: "Thrilling", moviesList: database }, { title: "Horror", moviesList: database }, { title: "Action", moviesList: database }, { title: "South Action", moviesList: database }, { title: "Bhojpuri", moviesList: database }];
            bannerArr.forEach((ele) => {
                const div3 = createElement("div", { class: "catalog_wrapper" });
                {
                    const arr = [];
                    ele.moviesList.forEach((movie,idx) => {
                        const div = createElement("div");
                        const img = createElement("img",{src:movie.imgUrl,id:idx});
                        div.append(img);
                        arr.push(div);
                        div.addEventListener("click",()=>{
                            renderDetails(Details());
                        });
                        
                    });
                    //never assign one nodes to two differen parent
                    div3.append(Carousel(ele.title, arr,4,arr.length));
                }
                div2$2.append(div3);

            });
        }
        div1.append(div2$1,div2$2);


    }
    return div1;
}