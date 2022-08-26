import { cat,params} from "./common/common.js";
import {Categories} from "./module/categories.js";
import {getContent, getLink, addSearchValueToCategory,categoryBtnClick, removeActiveClass} from "./common/onClick.js";
import {giphyUrl} from "./common/config.js";
import {Giphy} from "./module/giphy.js";


let category = new Categories(cat);
let categoryArr = category._render();

let searchValue = document.getElementById('search');
let btnSubmit = document.getElementById('submit');
let btnCategory = document.getElementsByClassName('category-item');
let btnTrend = document.getElementById('trends');


// on submit click
btnSubmit.addEventListener('click', () => {
    addSearchValueToCategory(cat, category, params.search);
    removeActiveClass();
    categoryBtnClick(btnCategory, params.search);
    btnSubmit.classList.add('active-submit');
});
    
// on trending click
btnTrend.addEventListener('click', () => { 
    getContent(getLink(params.trend,giphyUrl,null));
    removeActiveClass();
    btnTrend.classList.add('active-trend');
})

// on category click
categoryBtnClick(btnCategory, params.search);
