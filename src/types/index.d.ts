export interface FmInfo {
    title:string;
    cover?:string;
    src:string;
    type?: 'audio' | 'video',
    category?:string;
    like:Boolean;
    playing:Boolean;
    author?:string
}

export interface CategoryItem {
    title:string;
    active:boolean;
    value:string;
}