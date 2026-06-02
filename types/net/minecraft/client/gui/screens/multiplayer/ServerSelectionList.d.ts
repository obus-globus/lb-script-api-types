import type { Minecraft } from '../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { AbstractScrollArea$ScrollbarSettings } from '../../../../../../net/minecraft/client/gui/components/AbstractScrollArea$ScrollbarSettings.d.ts'
import type { ObjectSelectionList } from '../../../../../../net/minecraft/client/gui/components/ObjectSelectionList.d.ts'
import type { JoinMultiplayerScreen } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/JoinMultiplayerScreen.d.ts'
import type { ServerSelectionList$Entry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$Entry.d.ts'
import type { ServerSelectionList$NetworkServerEntry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$NetworkServerEntry.d.ts'
import type { ServerSelectionList$OnlineServerEntry } from '../../../../../../net/minecraft/client/gui/screens/multiplayer/ServerSelectionList$OnlineServerEntry.d.ts'
import type { ServerList } from '../../../../../../net/minecraft/client/multiplayer/ServerList.d.ts'
import type { LanServer } from '../../../../../../net/minecraft/client/server/LanServer.d.ts'
import type { SoundManager } from '../../../../../../net/minecraft/client/sounds/SoundManager.d.ts'
import type { Component } from '../../../../../../net/minecraft/network/chat/Component.d.ts'
import type { MutableComponent } from '../../../../../../net/minecraft/network/chat/MutableComponent.d.ts'
export class ServerSelectionList extends ObjectSelectionList<ServerSelectionList$Entry> {
    static SCROLLBAR_WIDTH: number;
    static defaultSettings(paramscrollRate: number): AbstractScrollArea$ScrollbarSettings;
    static playButtonClickSound(paramsoundManager: SoundManager): void;
    static wrapDefaultNarrationMessage(parammessage: Component): MutableComponent;
    constructor(screen: JoinMultiplayerScreen, minecraft: Minecraft, width: number, height: number, y: number, itemHeight: number)
    // private lanHeader: ServerSelectionList$Entry;
    // private networkServers: ServerSelectionList$NetworkServerEntry[];
    // private onlineServers: ServerSelectionList$OnlineServerEntry[];
    // private screen: JoinMultiplayerScreen;
    getRowWidth(): number;
    // private refreshEntries(): void;
    removed(): void;
    setSelected(selected: ServerSelectionList$Entry): void;
    updateNetworkServers(servers: LanServer[]): void;
    updateOnlineServers(servers: ServerList): void;
}