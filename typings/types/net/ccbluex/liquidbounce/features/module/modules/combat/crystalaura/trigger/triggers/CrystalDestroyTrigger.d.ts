import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundRemoveEntitiesPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundRemoveEntitiesPacket.d.ts'
/**
 * Runs placing when the information, that a crystal is removed is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalDestroyTrigger.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalDestroyTrigger.kt:36}
 */
export class CrystalDestroyTrigger extends PostPacketTrigger<ClientboundRemoveEntitiesPacket> {
    static INSTANCE: CrystalDestroyTrigger;
    // private packetListener: EventHook<PacketEvent>;
    protected postPacketHandler(packet: ClientboundRemoveEntitiesPacket): void;
}