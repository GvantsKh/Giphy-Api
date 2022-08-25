import { Base } from "../base.js";


export class Categories extends Base {

    constructor(appJson) {
        super();
        this.appJson = appJson;
    }

    _getCategories(){

            return this.appJson.map((obj) => {
                    return `<div class="cat" id="${obj}">${obj}</div>`
            }).join(" ");   
    }

    render() {
        this.setContent('categories', this._getCategories());
    }

}