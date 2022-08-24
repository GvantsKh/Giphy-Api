import { cat } from "./common/common.js";
import {Categories} from "./module/categories.js";


let category = new Categories(cat);
let categoryArr = category.render();

let submit = document.getElementById('submit');


submit.addEventListener('click', () => {
     let searchValue = document.getElementById('search');
     let newCategory = searchValue.value;

     cat.push(newCategory);
     category.render();

    });


