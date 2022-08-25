import { Base } from "../base.js";


export class Giphy extends Base {

    constructor(appJson) {
        super();
        this.appJson = appJson;
    }

    _getGiphy(){
        return this.appJson.data.map((obj) => {
             return `<div class="gifItem">
                    <img src="${obj.images.original.url}" />
                    <span>Rating : ${obj.rating}</span>
                </div>`
        })
        .join(" ");
    }



    render() {
        this.setContent('giphy', this._getGiphy());
    }

}