import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundTeleportEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundTeleportEntityPacket.d.ts'
/**
 * Runs placing when an entity moves.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a459e42039d5ec52f278233774c8880408bcf2a6/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/EntityMoveTrigger.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/EntityMoveTrigger.kt:35}
 */
export class EntityMoveTrigger extends PostPacketTrigger<ClientboundTeleportEntityPacket> {
    static INSTANCE: EntityMoveTrigger;
    protected postPacketHandler(packet: ClientboundTeleportEntityPacket): void;
}