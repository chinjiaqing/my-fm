export interface FmInfo {
    title:string;
    cover?:string;
    src:string;
    type?: 'audio' | 'video',
    category?:string;
    like:Boolean;
}
