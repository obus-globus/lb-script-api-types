import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { Button } from '../../../../../../net/minecraft/client/gui/components/Button.d.ts'
import type { HeaderAndFooterLayout } from '../../../../../../net/minecraft/client/gui/layouts/HeaderAndFooterLayout.d.ts'
import type { NarratableEntry } from '../../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { ServerSelectionList } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList.d.ts'
import type { KeyEvent } from '../../../../../../net/minecraft/client/input/KeyEvent.d.ts'
import type { ServerData } from '../../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerList } from '../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
import type { ServerStatusPinger } from '../../../../../../net/minecraft/client/multiplayer/ServerStatusPinger.d.ts'
import type { LanServerDetection$LanServerDetector } from '../../../../../../net/minecraft/client/server/LanServerDetection$LanServerDetector.d.ts'
import type { LanServerDetection$LanServerList } from '../../../../../../net/minecraft/client/server/LanServerDetection$LanServerList.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class JoinMultiplayerScreen extends Screen {
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: (Object | null)[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    constructor(lastScreen: Screen)
    // private deleteButton: Button;
    // private editButton: Button;
    // private editingServer: ServerData;
    // private lanServerDetector: LanServerDetection$LanServerDetector;
    // private lanServerList: LanServerDetection$LanServerList;
    // private lastScreen: Screen;
    // private layout: HeaderAndFooterLayout;
    readonly pinger: ServerStatusPinger;
    // private selectButton: Button;
    // private serverSelectionList: ServerSelectionList;
    readonly servers: ServerList;
    // private viaFabricPlus$button: Button;
    // private addServerCallback(result: boolean): void;
    // private deleteCallback(result: boolean): void;
    // private directJoinCallback(result: boolean): void;
    // private editServerCallback(result: boolean): void;
    getPinger(): ServerStatusPinger;
    getServers(): ServerList;
    init(): void;
    init(width: number, height: number): void;
    join(data: ServerData): void;
    keyPressed(event: KeyEvent): boolean;
    onClose(): void;
    onSelectedChange(): void;
    // private refreshServerList(): void;
    removed(): void;
    repositionElements(): void;
    tick(): void;
}