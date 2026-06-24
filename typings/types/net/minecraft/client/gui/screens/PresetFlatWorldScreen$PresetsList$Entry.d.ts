import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { PresetFlatWorldScreen$PresetsList } from '../../../../../net/minecraft/client/gui/screens/PresetFlatWorldScreen$PresetsList.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Holder } from '../../../../../net/minecraft/core/Holder.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Item } from '../../../../../net/minecraft/world/item/Item.d.ts'
import type { FlatLevelGeneratorPreset } from '../../../../../net/minecraft/world/level/levelgen/flat/FlatLevelGeneratorPreset.d.ts'
export class PresetFlatWorldScreen$PresetsList$Entry extends ObjectSelectionList$Entry<PresetFlatWorldScreen$PresetsList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: PresetFlatWorldScreen$PresetsList, preset: Holder<FlatLevelGeneratorPreset>)
    // private name: Component;
    // private preset: FlatLevelGeneratorPreset;
    // private blitSlot(graphics: GuiGraphicsExtractor, x: number, y: number, item: Item): void;
    // private blitSlotBg(graphics: GuiGraphicsExtractor, x: number, y: number): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    // private select(): void;
}