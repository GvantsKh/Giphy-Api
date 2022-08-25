import {Giphy} from "../module/giphy.js";


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
        gifs.render();
    });
}


export function addSearchValueToCategory(arr, categoryClass){
    let searchValue = document.getElementById('search');
    let newCategory = searchValue.value;

    if( newCategory !== ("")){
        arr.push(newCategory);
        categoryClass.render();
        arr.shift();
    }
}