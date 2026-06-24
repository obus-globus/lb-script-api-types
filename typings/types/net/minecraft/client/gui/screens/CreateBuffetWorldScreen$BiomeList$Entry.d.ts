import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { ObjectSelectionList$Entry } from '../../../../../net/minecraft/client/gui/components/ObjectSelectionList$Entry.d.ts'
import type { CreateBuffetWorldScreen$BiomeList } from '../../../../../net/minecraft/client/gui/screens/CreateBuffetWorldScreen$BiomeList.d.ts'
import type { MouseButtonEvent } from '../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { Holder$Reference } from '../../../../../net/minecraft/core/Holder$Reference.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Biome } from '../../../../../net/minecraft/world/level/biome/Biome.d.ts'
export class CreateBuffetWorldScreen$BiomeList$Entry extends ObjectSelectionList$Entry<CreateBuffetWorldScreen$BiomeList$Entry> {
    static CONTENT_PADDING: number;
    constructor(null_: CreateBuffetWorldScreen$BiomeList, biome: Holder$Reference<Biome>)
    // private biome: Holder$Reference<Biome>;
    // private name: Component;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}