import type { Font } from '../../../../../../net/minecraft/client/gui/Font.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { TransferableSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/packs/TransferableSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class TransferableSelectionList$HeaderEntry extends TransferableSelectionList$Entry {
    static CONTENT_PADDING: number;
    constructor(null_: TransferableSelectionList$HeaderEntry, font: Font, text: Component)
    // private font: Font;
    // private text: Component;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    getPackId(): string;
}