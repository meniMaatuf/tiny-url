class TinyUrls {
    urls = [];
    constructor(){

    }

    get(code){
        return this.urls.find(i => i.urlCode === code);
    }

    post(){}

}
