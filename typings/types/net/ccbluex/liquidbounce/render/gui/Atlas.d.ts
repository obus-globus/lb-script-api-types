import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rect2i } from '../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class Atlas extends Object {
    constructor(map: JavaMap<Item, Rect2i>, image: BufferedImage, aliasMap: JavaMap<Identifier, Identifier>)
    /**
     * Contains aliases. For example `minecraft:blue_wall_banner` -> `minecraft:wall_banner` which is necessary since
     * `minecraft:blue_wall_banner` has no texture.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a847f7e000c4d4be9b75e414d34b2481d6f08e17/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:74}
     */
    readonly aliasMap: JavaMap<Identifier, Identifier>;
    readonly image: BufferedImage;
    readonly map: JavaMap<Item, Rect2i>;
}