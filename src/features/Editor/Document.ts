import { Page } from "./Page";

export class Document {
    pages: Page[]

    constructor() {
        this.pages = [];
    }

    add(page: Page): void {
        this.pages.push(page);
    }

}