import type { EventHook } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/EventHook.d.ts'
import type { PacketEvent } from '../../../../../../../../../../net/ccbluex/liquidbounce/event/events/PacketEvent.d.ts'
import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundRemoveEntitiesPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundRemoveEntitiesPacket.d.ts'
/**
 * Runs placing when the information, that a crystal is removed is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalDestroyTrigger.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalDestroyTrigger.kt:33}
 */
export class CrystalDestroyTrigger extends PostPacketTrigger<ClientboundRemoveEntitiesPacket> {
    static INSTANCE: CrystalDestroyTrigger;
    // private packetListener: EventHook<PacketEvent>;
    protected postPacketHandler(packet: ClientboundRemoveEntitiesPacket): void;
}