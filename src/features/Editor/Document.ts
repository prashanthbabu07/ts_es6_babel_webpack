import { Page } from "./Page";

export class Document {
    private _pages: Page[]

    constructor() {
        this._pages = [];
    }

    add(page: Page): void {
        this._pages.push(page);
    }

}