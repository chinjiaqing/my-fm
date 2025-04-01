import FmList from "../data/fm";
import { toRef, ref, toRaw } from "vue";
import type { FmInfo,CategoryItem } from "../types";

const categories:CategoryItem[] = Array.from(new Set(FmList.filter((v) => !!v.category).map(v=>v.category))).map((v) => {return { value:v,title:v,active:false}}) as CategoryItem[]

export const allFmList = toRef<FmInfo[]>(FmList);

export const fmList = ref<FmInfo[]>([])

export const activeFmItem = ref<FmInfo | null>(null);

export const activeCategory = ref<CategoryItem | null>(null)

export const fmCategories = toRef<CategoryItem[]>([
    {
        title:'全部',
        value:'',
        active:false
    },
    {
        title:'收藏',
        value:'like',
        active:false,
    },
    ...categories
]);

export function togglePlayingState(flag:boolean){
    activeFmItem.value && (activeFmItem.value.playing = flag)
}
export function setActiveFmItem(info: FmInfo) {
    activeFmItem.value && (activeFmItem.value.playing = false)
    activeFmItem.value = {
        ...info
    }
}
export const isRandomMode = ref<boolean>(false)

export function setRandomMode(flag:boolean) {
    console.log('%c [ flag ]-39', 'font-size:13px; background:pink; color:#bf2c9f;', flag)
    isRandomMode.value = flag
}
export function setActiveCategory(info:CategoryItem){
    activeCategory.value && (activeCategory.value.active = false)
    info.active = true
    activeCategory.value = info
}

export function filterFmList(item: CategoryItem) {
    const cate = item.value
    activeCategory.value && (activeCategory.value.active = false)
    item.active = true
    activeCategory.value = item
    const allList = toRaw(allFmList.value)
    let list = []
    if (!cate) {
        list = allList
    } else if(cate === 'like') {
        list = allList.filter(v=>!!v.like)
    } else {
        list = allList.filter(v=> v.category === cate)
    }
    fmList.value = list
    console.log('%c [ list ]-56', 'font-size:13px; background:pink; color:#bf2c9f;', list)
    console.log('%c [ fmList ]-57', 'font-size:13px; background:pink; color:#bf2c9f;', fmList)
    return fmList
}
