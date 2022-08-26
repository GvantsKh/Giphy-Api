import {Giphy} from "../module/giphy.js";
import { giphyUrl } from "./config.js";


export function getLink(arr, link,value){
    let res = link;
    
    if(value === null){
       for (let i = 0; i < arr.length; i++){
            res = res+arr[i].title+'?limit='+arr[i].limit+'&api_key='+arr[i].api_key+'&fmt='+arr[i].fmt;         
        }
    }

    else{
        for (let i = 0; i < arr.length; i++){
            res = res+arr[i].title+'?q='+value+arr[i].q+'?limit='+arr[i].limit+'&api_key='+arr[i].api_key+'&fmt='+arr[i].fmt;         
        }
    }
    
    return res; 
}

export function removeSpaces(text){
    let result = '';

    for(let i=0; i<text.length; i++){
        if(text[i] === ' '){
            result = result + '%20';
        }

        else{
            result = result + text[i];
        }
    }
    return result;
}

export function getContent(link){
    fetch(link)
    .then((res) => {
        return res.json();
    })
    .then((res)=>{
        let gifs = new Giphy(res);
        gifs._render();
    });
}

export function addSearchValueToCategory(arr, categoryClass, params){
    let searchValue = document.getElementById('search');
    let newCategory = searchValue.value;

    if( newCategory !== ("")){
        arr.push(newCategory);
        categoryClass._render();
        arr.shift();
        getContent(getLink(params, giphyUrl, searchValue.value ));

    }
}

export function removeActiveClass(){

    let btnSubmit = document.getElementById('submit');
    let btnCategory = document.getElementsByClassName('category-item');
    let btnTrend = document.getElementById('trends');

    btnSubmit.classList.remove('active-submit');
    btnTrend.classList.remove('active-trend');

    for (let i = 0; i < btnCategory.length; i++) {
        btnCategory[i].classList.remove('active-category');
    }
    
}

export function categoryBtnClick(btnCategory, arr){
    
    for (let i = 0; i < btnCategory.length; i++) {
        
        let categoryElem = btnCategory[i];
        let value = removeSpaces(categoryElem.id);
    
        categoryElem.addEventListener('click', () => {
    
            for (let j = 0; j < btnCategory.length; j++) {
                btnCategory[j].classList.remove('active-category');
            }
    
            removeActiveClass();
            categoryElem.classList.add('active-category');
            getContent(getLink(arr, giphyUrl, value));
        })
    }
}
    