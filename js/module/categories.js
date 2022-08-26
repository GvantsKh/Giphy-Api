import { Base } from "../base.js";


export class Categories extends Base {

    constructor(appJson) {
        super();
        this.appJson = appJson;
    }

    _getCategories(){
            return this.appJson.map((obj) => {
                    return `<div class="category-item" id="${obj}">${obj}</div>`
            }).join(" ");   
    }

    _render() {
        this._setContent('categories', this._getCategories());
    }

}