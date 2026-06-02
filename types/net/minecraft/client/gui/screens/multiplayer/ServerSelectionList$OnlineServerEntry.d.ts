import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { SelectableEntry } from '../../../../../../net/minecraft/client/gui/components/SelectableEntry.d.ts'
import type { FaviconTexture } from '../../../../../../net/minecraft/client/gui/screens/FaviconTexture.d.ts'
import type { JoinMultiplayerScreen } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/JoinMultiplayerScreen.d.ts'
import type { ServerSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$Entry.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { MouseButtonEvent } from '../../../../../../net/minecraft/client/input/MouseButtonEvent.d.ts'
import type { ServerData } from '../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerSelectionList$OnlineServerEntry extends ServerSelectionList$Entry implements SelectableEntry {
    static CONTENT_PADDING: number;
    constructor(null_: ServerSelectionList$OnlineServerEntry, screen: JoinMultiplayerScreen, serverData: ServerData)
    // private icon: FaviconTexture;
    // private lastIconBytes: number[];
    // private minecraft: Minecraft;
    // private onlinePlayersTooltip: Component[];
    // private screen: JoinMultiplayerScreen;
    readonly serverData: ServerData;
    // private statusIcon: Identifier;
    // private statusIconTooltip: Component;
    // private viaFabricPlus$disableServerPinging: boolean;
    close(): void;
    extractContent(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, hovered: boolean, a: number): void;
    extractIcon(graphics: GuiGraphicsExtractor, rowLeft: number, rowTop: number, location: Identifier): void;
    getNarration(): Component;
    getServerData(): ServerData;
    join(): void;
    keyPressed(event: KeyEvent): boolean;
    matches(other: ServerSelectionList$Entry): boolean;
    mouseClicked(event: MouseButtonEvent, doubleClick: boolean): boolean;
    mouseOverBottomLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverBottomRightQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverIcon(relX: number, relY: number, size: number): boolean;
    mouseOverLeftHalf(relX: number, relY: number, size: number): boolean;
    mouseOverRightHalf(relX: number, relY: number, size: number): boolean;
    mouseOverTopLeftQuarter(relX: number, relY: number, size: number): boolean;
    mouseOverTopRightQuarter(relX: number, relY: number, size: number): boolean;
    // private refreshStatus(): void;
    // private swap(currentIndex: number, newIndex: number): void;
    updateServerList(): void;
    // private uploadServerIcon(serverIconBytes: number[]): boolean;
}