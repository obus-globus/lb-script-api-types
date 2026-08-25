import type { JavaMap } from '../../../../../../../../../JavaMap.d.ts'
import type { UUID } from '../../../../../../../../../java/util/UUID.d.ts'
import type { Tagged$Companion } from '../../../../../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
import type { EventHook } from '../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { AntiBotMode } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/AntiBotMode.d.ts'
import type { IntaveHeavyAntiBotMode$SuspectInfo } from '../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/IntaveHeavyAntiBotMode$SuspectInfo.d.ts'
import type { ClientboundPlayerInfoRemovePacket } from '../../../../../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoRemovePacket.d.ts'
import type { ClientboundPlayerInfoUpdatePacket } from '../../../../../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket.d.ts'
import type { ClientboundPlayerInfoUpdatePacket$Entry } from '../../../../../../../../../net/minecraft/network/protocol/game/ClientboundPlayerInfoUpdatePacket$Entry.d.ts'
import type { Player } from '../../../../../../../../../net/minecraft/world/entity/player/Player.d.ts'
/**
 * Intave anti-cheat, Heavy bot type, their best bot type.
 *
 * Tested on: gamster.org and a private server with latest Intave as of 7/28/2022.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/IntaveHeavyAntiBotMode.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/IntaveHeavyAntiBotMode.kt:35}
 */
export class IntaveHeavyAntiBotMode extends AntiBotMode {
    static Companion: Tagged$Companion;
    static INSTANCE: IntaveHeavyAntiBotMode;
    // private INTAVE_BUG_FIX: boolean;
    // private botList: UUID[];
    /**
     * ## Ping logic:
     * When you join a server, you always have 0 ping at start. However, if you are on a game like Practice and
     * come back from a duel, you will keep your ping.
     *
     * As for Matrix and Intave, they defy this logic. Intave though decides instead to fix it by sending
     * {@link ClientboundPlayerInfoUpdatePacket.Action.UPDATE_LATENCY} to make up for the ping issue.
     * Unfortunately, that leads to even more problems.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/IntaveHeavyAntiBotMode.kt#L49 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/misc/antibot/modes/IntaveHeavyAntiBotMode.kt:49}
     */
    readonly packetHandler: EventHook<PacketEvent>;
    // private suspectList: JavaMap<UUID, IntaveHeavyAntiBotMode$SuspectInfo>;
    // private handleListPacket(packet: ClientboundPlayerInfoUpdatePacket): void;
    // private handlePlayerListAddPlayers(entries: ClientboundPlayerInfoUpdatePacket$Entry[]): void;
    // private handlePlayerListUpdateLatency(entries: ClientboundPlayerInfoUpdatePacket$Entry[]): void;
    // private handlePlayerRemove(packet: ClientboundPlayerInfoRemovePacket): void;
    isBot(entity: Player): boolean;
    reset(): void;
}