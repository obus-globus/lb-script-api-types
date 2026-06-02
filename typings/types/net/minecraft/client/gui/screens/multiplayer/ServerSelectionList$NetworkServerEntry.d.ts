import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { JoinMultiplayerScreen } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/JoinMultiplayerScreen.d.ts'
import type { ServerSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { LanServer } from '../../../../../../net/minecraft/client/server/LanServer.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
export class ServerSelectionList$NetworkServerEntry extends ServerSelectionList$Entry {
    static CONTENT_PADDING: number;
    constructor(screen: JoinMultiplayerScreen, serverData: LanServer)
    // private minecraft: Minecraft;
    // private screen: JoinMultiplayerScreen;
    // private serverData: LanServer;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    getNarration(): Component;
    getServerNarration(): Component;
    join(): void;
    keyPressed(event: KeyEvent): boolean;
    matches(other: ServerSelectionList$Entry): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
}