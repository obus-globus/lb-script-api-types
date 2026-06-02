import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { OverlayRenderEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/OverlayRenderEvent.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiOverlapRearranger } from '../../../../../net/ccbluex/liquidbounce/render/gui/GuiOverlapRearranger.d.ts'
import type { ItemStackListRenderState } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderState.d.ts'
import type { Font } from '../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Block } from '../../../../../net/minecraft/world/level/block/Block.d.ts'
export class ItemStackListRenderer extends Object implements EventListener {
    static INSTANCE: ItemStackListRenderer;
    static create(paramarg0: GuiGraphicsExtractor, paramarg1: ItemStack[]): ItemStackListRenderState;
    static create(paramarg0: GuiGraphicsExtractor, paramarg1: (Object | null)[]): ItemStackListRenderState;
    static createItemStackForRendering(paramarg0: Block, paramarg1: number): ItemStack;
    // private block2Item: Map<Block, Item>;
    // private overlapRearranger: GuiOverlapRearranger;
    // private overlayRenderHandler: EventHook<OverlayRenderEvent>;
    // private planned: ItemStackListRenderState[];
    // private textRenderer: Font;
    children(): EventListener[];
    draw(state: ItemStackListRenderState, rearrange: boolean): void;
    // private drawNow(state: ItemStackListRenderState, centerX: number, centerY: number): void;
    // private drawSlotTexture(guiGraphics: GuiGraphicsExtractor, x: number, y: number): void;
    // private fillBackground(guiGraphics: GuiGraphicsExtractor, width: number, height: number, color: Color4b, outlineColor: Color4b, margin: number): void;
    parent(): EventListener | null;
    unregister(): void;
}