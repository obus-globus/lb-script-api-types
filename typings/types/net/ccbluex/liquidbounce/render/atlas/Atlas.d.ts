import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class Atlas extends Object {
    constructor(images: JavaMap<Identifier, number[]>, aliasMap: JavaMap<Identifier, Identifier>)
    /**
     * Contains aliases. For example `minecraft:blue_wall_banner` -> `minecraft:wall_banner` which is necessary since
     * `minecraft:blue_wall_banner` has no texture.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/04647c31fac71244593009964391c5075a4675ba/src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt:49}
     */
    readonly aliasMap: JavaMap<Identifier, Identifier>;
    readonly images: JavaMap<Identifier, number[]>;
}