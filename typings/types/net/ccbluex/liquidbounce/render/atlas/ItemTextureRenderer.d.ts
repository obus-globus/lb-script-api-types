import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { AbstractAtlasRenderer } from '../../../../../net/ccbluex/liquidbounce/render/atlas/AbstractAtlasRenderer.d.ts'
import type { Atlas } from '../../../../../net/ccbluex/liquidbounce/render/atlas/Atlas.d.ts'
import type { Rect2i } from '../../../../../net/minecraft/client/renderer/Rect2i.d.ts'
import type { TrackingItemStackRenderState } from '../../../../../net/minecraft/client/renderer/item/TrackingItemStackRenderState.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
/**
 * @see net.minecraft.client.gui.render.GuiItemAtlas
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt#L79 | src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt:79}
 */
export class ItemTextureRenderer extends AbstractAtlasRenderer<Atlas> {
    constructor(scale: number)
    // private items: Item[];
    // private scale: number;
    // private /*not mapped: */ getTileCount(): number;
    // private /*not mapped: */ getTileSize(): number;
    protected buildAtlas(images: JavaMap<Identifier, number[]>): Atlas;
    // private findBlockToItemAliases(): JavaMap<Identifier, Identifier>;
    // private findItemIdForBlock(blockId: Identifier, blockItem: Item): Identifier | null;
    // private renderItemToAtlas(state: TrackingItemStackRenderState, rect: Rect2i): void;
    /**
     * @see GuiRenderer.prepareItemElements
From 1.21.5 DrawContext code
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt#L92 | src/main/kotlin/net/ccbluex/liquidbounce/render/atlas/ItemImageAtlas.kt:92}
     */
    protected renderTiles(): JavaMap<Identifier, Rect2i>;
}