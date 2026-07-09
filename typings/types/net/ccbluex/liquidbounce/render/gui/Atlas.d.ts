import type { BufferedImage } from '../../../../../java/awt/image/BufferedImage.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Rect2i } from '../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
export class Atlas extends Object {
    constructor(map: Map<Item, Rect2i>, image: BufferedImage, aliasMap: Map<Identifier, Identifier>)
    /**
     * Contains aliases. For example `minecraft:blue_wall_banner` -> `minecraft:wall_banner` which is necessary since
     * `minecraft:blue_wall_banner` has no texture.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/beffa1e580bb0cb76b9ba9d386521684cb421b73/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt#L74 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemImageAtlas.kt:74}
     */
    readonly aliasMap: Map<Identifier, Identifier>;
    readonly image: BufferedImage;
    readonly map: Map<Item, Rect2i>;
}