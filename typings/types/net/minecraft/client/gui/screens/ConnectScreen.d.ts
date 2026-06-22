import type { ChannelFuture } from '../../../../../io/netty/channel/ChannelFuture.d.ts'
import type { ConnectScreenAccessor } from '../../../../../net/fabricmc/fabric/mixin/networking/client/accessor/ConnectScreenAccessor.d.ts'
import type { Minecraft } from '../../../../../net/minecraft/client/Minecraft.d.ts'
import type { GuiGraphicsExtractor } from '../../../../../net/minecraft/client/gui/GuiGraphicsExtractor.d.ts'
import type { NarratableEntry } from '../../../../../net/minecraft/client/gui/narration/NarratableEntry.d.ts'
import type { Screen } from '../../../../../net/minecraft/client/gui/screens/Screen.d.ts'
import type { Screen$NarratableSearchResult } from '../../../../../net/minecraft/client/gui/screens/Screen$NarratableSearchResult.d.ts'
import type { ServerData } from '../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { TransferState } from '../../../../../net/minecraft/client/multiplayer/TransferState.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
import type { Connection } from '../../../../../net/minecraft/network/Connection.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
import type { ItemStack } from '../../../../../net/minecraft/world/item/ItemStack.d.ts'
export class ConnectScreen extends Screen implements ConnectScreenAccessor {
    static ABORT_CONNECTION: Component;
    static FOOTER_SEPARATOR: Identifier;
    static HEADER_SEPARATOR: Identifier;
    static INWORLD_FOOTER_SEPARATOR: Identifier;
    static INWORLD_HEADER_SEPARATOR: Identifier;
    static MENU_BACKGROUND: Identifier;
    static UNKNOWN_HOST_MESSAGE: Component;
    static extractMenuBackgroundTexture(paramgraphics: GuiGraphicsExtractor, parammenuBackground: Identifier, paramx: number, paramy: number, paramu: number, paramv: number, paramwidth: number, paramheight: number): void;
    static findNarratableWidget(paramnarratableEntries: NarratableEntry[], paramlastNarratable: NarratableEntry): Screen$NarratableSearchResult;
    static getTooltipFromItem(paramminecraft: Minecraft, paramitemStack: ItemStack): Component[];
    static startConnecting(paramparent: Screen, paramminecraft: Minecraft, paramhostAndPort: ServerAddress, paramdata: ServerData, paramisQuickPlay: boolean, paramtransferState: TransferState): void;
    private constructor(parent: Screen, connectFailedTitle: Component)
    // private aborted: boolean;
    // private channelFuture: ChannelFuture;
    // private connectFailedTitle: Component;
    readonly connection: Connection;
    // private lastNarration: number;
    // private parent: Screen;
    // private serverAddress: ServerAddress;
    // private status: Component;
    connect(minecraft: Minecraft, hostAndPort: ServerAddress, server: ServerData, transferState: TransferState): void;
    extractRenderState(graphics: GuiGraphicsExtractor, mouseX: number, mouseY: number, a: number): void;
    getConnection(): Connection;
    // private getConnectionDetails(arg0: Connection, arg1: ServerAddress): Component;
    init(): void;
    init(width: number, height: number): void;
    shouldCloseOnEsc(): boolean;
    tick(): void;
    updateStatus(status: Component): void;
}