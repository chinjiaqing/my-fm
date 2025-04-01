import type { FmInfo } from "../types";
const images = import.meta.glob('@/assets/images/*.*', {
    eager: true,
    query: '?url'
});
function getImage(fileName: string): string {
    // 匹配键名如 '/src/assets/images/xxx.jpg'
    const fullName = `/src/assets/images/${fileName}`
    const key = Object.keys(images).find(k => k.endsWith(`${fullName}`));
    return key ? (images[key] as any).default : '';
}
const FmList: FmInfo[] = [
    {
        title: 'AsiaFM96.5 成都潮流音乐台',
        src: 'https://ytcastmp3.radio.cn/65/stream_12401.mp3?type=1&key=07753b890b1fcd00b298ed8ab4dd86c3&time=67ea1539',
        cover: getImage('53e830f0-0e25-11f0-95f5-9bc77a6ed22b.jpeg'),
        category: '音乐',
        type: 'audio',
        like: false,
        playing: false,
        author: 'AsiaFM亚洲联播网'
    },
    {
        title: 'V-Rock',
        src: 'https://play.smolyakov.dev/stream/vc/vrock',
        author: 'Vice City Radio',
        like: false,
        playing: false,
        category: '音乐',
        cover: getImage('e9282e80-0ecb-11f0-a6b0-c781fd1213b5.jpg'),
    },
    {
        title: '民谣音乐台',
        author: '河南广播电视台',
        src: 'https://play-radio-stream3.hndt.com/now/DTK5qc83/playlist.m3u8?audio',
        cover: getImage('393de400-0ecc-11f0-be37-cdeb27a167d0.jpeg'),
        like: false,
        playing: false,
        category: '音乐',
    },
    {
        title: '四川岷江音乐广播FM95.5',
        src: 'https://ytcastmp3.radio.cn/61/stream_10447.mp3?type=1&key=a9dc33e072cee949586925a01e3ba6fb&time=67ea970d',
        like: false,
        playing: false,
        category: '音乐',
        author: '四川广播电视台',
        cover: getImage('83dfd250-0e33-11f0-93ee-714a48f33565.png')
    },
    {
        title: '香港凤凰卫视 资讯台',
        src: 'https://playtv-live.ifeng.com/live/06OLEEWQKN4_audio.m3u8',
        like: false,
        playing: false,
        author: '凤凰卫视',
        category: '新闻',
        cover: getImage('13269880-0ea3-11f0-b20e-0fbdbca4fb88.jpg')
    },
    {
        title: 'CRI环球资讯广播',
        cover: getImage('2b4ebb40-0ea8-11f0-8d78-571079906296.png'),
        src: 'https://sk.cri.cn/905.m3u8',
        playing: false,
        category: '新闻',
        like: false,
        author: 'CRI中国国际广播电台'
    },
    {
        title: '香港凤凰卫视 中文台',
        cover: getImage('226d0f80-0ea9-11f0-b100-b39d5ff17c3c.jpg'),
        src: 'https://playtv-live.ifeng.com/live/06OLEGEGM4G_audio.m3u8',
        playing: false,
        category: '新闻',
        like: false,
        author: '凤凰卫视'
    },
    {
        title: '成都故事广播',
        cover: getImage('bce88e40-0ecc-11f0-8c97-197867b23bae.jpeg'),
        author: '成都广播电视台',
        playing: false,
        category: '故事',
        like: false,
        src: 'https://lhttp.qingting.fm/live/5022004/64k.mp3'
    }
]

export default FmList

