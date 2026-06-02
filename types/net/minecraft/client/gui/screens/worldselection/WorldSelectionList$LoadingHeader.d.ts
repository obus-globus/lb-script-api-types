import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { WorldSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/worldselection/WorldSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class WorldSelectionList$LoadingHeader extends WorldSelectionList$Entry {
    static CONTENT_PADDING: number;
    constructor(minecraft: Minecraft)
    // private minecraft: Minecraft;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
}