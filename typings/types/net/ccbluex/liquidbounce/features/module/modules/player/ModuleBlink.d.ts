import type { EventHook } from '../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { BlinkPacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/BlinkPacketEvent.d.ts'
import type { GameTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/GameTickEvent.d.ts'
import type { PacketEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PlayerMovementTickEvent } from '../../../../../../../net/ccbluex/liquidbounce/event/events/PlayerMovementTickEvent.d.ts'
import type { TransferOrigin } from '../../../../../../../net/ccbluex/liquidbounce/event/events/TransferOrigin.d.ts'
import type { ClientModule } from '../../../../../../../net/ccbluex/liquidbounce/features/module/ClientModule.d.ts'
import type { RemotePlayer } from '../../../../../../../net/minecraft/client/player/RemotePlayer.d.ts'
/**
 * Blink module
 *
 * Suspends packets before they are sent to/received from the server.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cf742eb17a33041e582f6f30822aab3e8450edf8/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleBlink.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/player/ModuleBlink.kt:53}
 */
export class ModuleBlink extends ClientModule {
    static INSTANCE: ModuleBlink;
    // private ambush: boolean;
    // private /*not mapped: */ getAmbush(): boolean;
    // private autoDisable: boolean;
    // private /*not mapped: */ getAutoDisable(): boolean;
    // private directions: TransferOrigin[];
    // private /*not mapped: */ getDirections(): TransferOrigin[];
    // private dummy: boolean;
    // private /*not mapped: */ getDummy(): boolean;
    // private dummyPlayer: RemotePlayer | null;
    // private fakeLagHandler: EventHook<BlinkPacketEvent>;
    readonly packetHandler: EventHook<PacketEvent>;
    // private playerMoveHandler: EventHook<PlayerMovementTickEvent>;
    // private tickCounter: number;
    // private tickTask: EventHook<GameTickEvent>;
    isDummyPlayer(entityId: number): boolean;
    onDisabled(): void;
    onEnabled(): void;
    // private removeClone(): void;
}