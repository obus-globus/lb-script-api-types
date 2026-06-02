import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { LoadingDotsWidget } from '../../../../../../net/minecraft/client/gui/components/LoadingDotsWidget.d.ts'
import type { ServerSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$Entry.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ServerSelectionList$LANHeader extends ServerSelectionList$Entry {
    static CONTENT_PADDING: number;
    constructor()
    // private loadingDotsWidget: LoadingDotsWidget;
    // private minecraft: Minecraft;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    join(): void;
    matches(other: ServerSelectionList$Entry): boolean;
}