import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class Atlas extends Object {
    constructor(images: JavaMap<Identifier, number[]>, aliasMap: JavaMap<Identifier, Identifier>)
    /**
     * Contains aliases. For example `minecraft:blue_wall_banner` -> `minecraft:wall_banner` which is necessary since
     * `minecraft:blue_wall_banner` has no texture.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/8fc1f12b34c50f483c3b3446c45e8bc1de58e20c/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L78 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:78}
     */
    readonly aliasMap: JavaMap<Identifier, Identifier>;
    readonly images: JavaMap<Identifier, number[]>;
}