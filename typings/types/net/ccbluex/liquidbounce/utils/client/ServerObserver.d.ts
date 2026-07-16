import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Duration } from '../../../../../kotlin/time/Duration.d.ts'
import type { IpInfoApi$IpData } from '../../../../../net/ccbluex/liquidbounce/api/thirdparty/IpInfoApi$IpData.d.ts'
import type { EventHook } from '../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { EventListener } from '../../../../../net/ccbluex/liquidbounce/event/EventListener.d.ts'
import type { DisconnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/DisconnectEvent.d.ts'
import type { PacketEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { ServerConnectEvent } from '../../../../../net/ccbluex/liquidbounce/event/events/ServerConnectEvent.d.ts'
import type { Chronometer } from '../../../../../net/ccbluex/liquidbounce/utils/client/Chronometer.d.ts'
import type { ServerObserver$ServerType } from '../../../../../net/ccbluex/liquidbounce/utils/client/ServerObserver$ServerType.d.ts'
import type { ServerData } from '../../../../../net/minecraft/client/multiplayer/ServerData.d.ts'
import type { ServerAddress } from '../../../../../net/minecraft/client/multiplayer/resolver/ServerAddress.d.ts'
import type { Component } from '../../../../../net/minecraft/network/chat/Component.d.ts'
import type { Identifier } from '../../../../../net/minecraft/resources/Identifier.d.ts'
export class ServerObserver extends Object implements EventListener {
    static INSTANCE: ServerObserver;
    // private AVERAGE_OF: number;
    // private chronometer: Chronometer;
    // private disconnectHandler: EventHook<DisconnectEvent>;
    readonly formattedPluginList: Component[] | null;
    // private handleServerConnect: EventHook<ServerConnectEvent>;
    readonly hostingInformation: IpInfoApi$IpData | null;
    // private intervals: number[];
    // private isCapturingTransactions: boolean;
    /*not mapped: */ isCapturingTransactions(): boolean;
    // private knownAntiCheats: string[];
    // private packetObserver: EventHook<PacketEvent>;
    readonly payloadChannels: Identifier[];
    readonly plugins: string[] | null;
    readonly serverAddress: ServerAddress | null;
    readonly serverId: string | null;
    readonly serverInfo: ServerData | null;
    readonly serverType: ServerObserver$ServerType | null;
    readonly serverVersion: string | null;
    readonly tps: number;
    readonly transactions: number[];
    // private wasDisconnected: boolean;
    /**
     * Requests completions for all given commands.
     * This is an exploit for servers that block the `/plugins` command.
     *
     * Plugins will add themselves to the command suggestions list with a prefix like `/pluginname:command`.
     * This can be used to get a list of plugins on the server.
     *
     * @see {@link ServerboundCommandSuggestionPacket}
     * @see {@link ModulePlugins}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt#L152 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt:152}
     */
    captureCommandSuggestions(timeout: Duration): boolean;
    children(): EventListener[];
    /**
     * Reference: https://github.com/CCBlueX/LiquidBounce/blob/legacy/src/main/java/net/ccbluex/liquidbounce/features/module/modules/misc/AnticheatDetector.kt
     * @author RtxOP
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt#L305 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt:305}
     */
    guessAntiCheat(address: string | null): string | null;
    parent(): EventListener | null;
    /**
     * Reconnects to the last server. This is safe to call from every thread since it records a render call and
     * therefore runs in the Minecraft thread
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt#L126 | src/main/kotlin/net/ccbluex/liquidbounce/utils/client/ServerObserver.kt:126}
     */
    reconnect(): void;
    requestHostingInformation(): void;
    unregister(): void;
}