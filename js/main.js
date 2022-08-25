import { cat,params} from "./common/common.js";
import {Categories} from "./module/categories.js";
import {getLink,removeSpaces, getContent,addSearchValueToCategory} from "./common/onClick.js";
import {giphyUrl} from "./common/config.js";
import {Giphy} from "./module/giphy.js";


let category = new Categories(cat);
let categoryArr = category.render();

let searchValue = document.getElementById('search');
let btnSubmit = document.getElementById('submit');
let btnCategory = document.getElementsByClassName('cat');
let btnTrend = document.getElementById('trends');



btnSubmit.addEventListener('click', () => {
    addSearchValueToCategory(cat, category);
    getContent(getLink(params.search, giphyUrl,searchValue.value ));
    btnSubmit.classList.add('active-submit');
    btnTrend.classList.remove('active-trend');
});
    

btnTrend.addEventListener('click', () => { 
    getContent(getLink(params.trend,giphyUrl,null));
    btnTrend.classList.add('active-trend');
    btnSubmit.classList.remove('active-submit');
})



for (let i = 0; i < btnCategory.length; i++) {
    
    let categoryElem = btnCategory[i];
    let value = removeSpaces(categoryElem.id);

    categoryElem.addEventListener('click', () => {
    
        for (let j = 0; j < btnCategory.length; j++) {
            btnCategory[j].classList.remove('active-category');
        }
    
        categoryElem.classList.add('active-category');
        getContent(getLink(params.search, giphyUrl, value));
         
    })
}
