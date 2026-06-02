import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { CreateFlatWorldScreen$DetailsList$Entry } from '../../../../../net/minecraft/client/gui/screens/CreateFlatWorldScreen$DetailsList$Entry.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
import type { BlockState } from '../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { FlatLayerInfo } from '../../../../../net/minecraft/world/level/levelgen/flat/FlatLayerInfo.d.ts'
export class CreateFlatWorldScreen$DetailsList$LayerEntry extends CreateFlatWorldScreen$DetailsList$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: CreateFlatWorldScreen$DetailsList$LayerEntry, layerInfo: FlatLayerInfo, index: number)
    // private index: number;
    // private layerInfo: FlatLayerInfo;
    // private blitSlot(graphics: GuiGraphicsExtractor, x: number, y: number, itemStack: ItemStack): void;
    // private blitSlotBg(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    // private getDisplayItem(blockState: BlockState): ItemStack;
    getNarration(): Component;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}