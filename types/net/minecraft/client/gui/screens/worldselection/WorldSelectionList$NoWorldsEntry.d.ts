import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { StringWidget } from '../../../../../../net/minecraft/client/gui/components/StringWidget.d.ts'
import type { WorldSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class WorldSelectionList$NoWorldsEntry extends WorldSelectionList$Entry {
    static CONTENT_PADDING: number;
    constructor(component: Component, font: Font)
    // private stringWidget: StringWidget;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
}