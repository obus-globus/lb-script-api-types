import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BoundingBox2f } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/BoundingBox2f.d.ts'
import type { Color4b } from '../../../../../net/ccbluex/liquidbounce/render/engine/type/Color4b.d.ts'
import type { GuiRearrangeable } from '../../../../../net/ccbluex/liquidbounce/render/gui/GuiRearrangeable.d.ts'
import type { ItemStackListRenderer$BackgroundMode } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderer$BackgroundMode.d.ts'
import type { ItemStackListRenderer$SingleItemStackRenderer } from '../../../../../net/ccbluex/liquidbounce/render/gui/ItemStackListRenderer$SingleItemStackRenderer.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { Vector2fc } from '../../../../../org/joml/Vector2fc.d.ts'
export class ItemStackListRenderState extends Object implements GuiRearrangeable {
    constructor(guiGraphics: GuiGraphicsExtractor, stacks: ItemStack[], title: Component | null, titleColor: number, centerX: number, centerY: number, scale: number, rowLength: number, backgroundColor: Color4b, backgroundOutlineColor: Color4b, backgroundMargin: number, useTexture: boolean, itemStackRenderer: ItemStackListRenderer$SingleItemStackRenderer)
    // private backgroundColor: Color4b;
    /*not mapped: */ getBackgroundColor$liquidbounce(): Color4b;
    // private backgroundMargin: number;
    /*not mapped: */ getBackgroundMargin$liquidbounce(): number;
    // private backgroundOutlineColor: Color4b;
    /*not mapped: */ getBackgroundOutlineColor$liquidbounce(): Color4b;
    bounds: BoundingBox2f;
    // private centerX: number;
    /*not mapped: */ getCenterX$liquidbounce(): number;
    // private centerY: number;
    /*not mapped: */ getCenterY$liquidbounce(): number;
    // private guiGraphics: GuiGraphicsExtractor;
    /*not mapped: */ getGuiGraphics$liquidbounce(): GuiGraphicsExtractor;
    // private itemStackRenderer: ItemStackListRenderer$SingleItemStackRenderer;
    /*not mapped: */ getItemStackRenderer$liquidbounce(): ItemStackListRenderer$SingleItemStackRenderer;
    // private rowLength: number;
    /*not mapped: */ getRowLength$liquidbounce(): number;
    // private scale: number;
    /*not mapped: */ getScale$liquidbounce(): number;
    // private stacks: ItemStack[];
    /*not mapped: */ getStacks$liquidbounce(): ItemStack[];
    // private title: Component | null;
    /*not mapped: */ getTitle$liquidbounce(): Component | null;
    // private titleColor: number;
    /*not mapped: */ getTitleColor$liquidbounce(): number;
    // private useTexture: boolean;
    /*not mapped: */ getUseTexture$liquidbounce(): boolean;
    background(choice: ItemStackListRenderer$BackgroundMode): ItemStackListRenderState;
    center(center: Vector2fc): ItemStackListRenderState;
    centerX(centerX: number): ItemStackListRenderState;
    centerY(centerY: number): ItemStackListRenderState;
    component1(): GuiGraphicsExtractor;
    component10(): Color4b;
    component11(): number;
    component12(): boolean;
    component13(): ItemStackListRenderer$SingleItemStackRenderer;
    component2(): ItemStack[];
    component3(): Component | null;
    component4(): number;
    component5(): number;
    component6(): number;
    component7(): number;
    component8(): number;
    component9(): Color4b;
    copy(guiGraphics: GuiGraphicsExtractor, stacks: ItemStack[], title: Component | null, titleColor: number, centerX: number, centerY: number, scale: number, rowLength: number, backgroundColor: Color4b, backgroundOutlineColor: Color4b, backgroundMargin: number, useTexture: boolean, itemStackRenderer: ItemStackListRenderer$SingleItemStackRenderer): ItemStackListRenderState;
    draw(rearrange: boolean): void;
    equals(other: Object | null): boolean;
    hashCode(): number;
    itemStackRenderer(itemStackRenderer: ItemStackListRenderer$SingleItemStackRenderer): ItemStackListRenderState;
    rectBackground(color: Color4b, outlineColor: Color4b, margin: number): ItemStackListRenderState;
    /**
     * @param rowLength The maximum count of stack which can be placed in one row.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemStackListRenderState.kt#L71 | src/main/kotlin/net/ccbluex/liquidbounce/render/gui/ItemStackListRenderState.kt:71}
     */
    rowLength(rowLength: number): ItemStackListRenderState;
    scale(scale: number): ItemStackListRenderState;
    textureBackground(): ItemStackListRenderState;
    title(title: Component | null, color: number): ItemStackListRenderState;
    toString(): string;
}