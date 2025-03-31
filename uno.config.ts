import {
    defineConfig,
    presetAttributify,
    presetIcons,
    presetWind4
} from "unocss";

import Solar from "@iconify-json/solar/icons.json"
import Spinners from "@iconify-json/svg-spinners/icons.json"

export default defineConfig({
    presets: [
        presetWind4(),
        presetAttributify(),
        presetIcons({
            prefix: ["i-"],
            extraProperties: {
                "display": "inline-block",
                "vertical-align": "middle",
            },
            collections: {
                "solar": ()=> Solar,
                "svg-spinners": () => Spinners,
            },
            customizations: {
                iconCustomizer(_, __, props) {
                    props.width = "1em";
                    props.height = "1em";
                },
            },
        }),
    ],
    theme:{
        colors:{
            'primary':'#7f64f8',
            'second':'#569df3'
        }
    }
});
