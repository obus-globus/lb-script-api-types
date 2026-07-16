import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundTeleportEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundTeleportEntityPacket.d.ts'
/**
 * Runs placing when an entity moves.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/EntityMoveTrigger.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/EntityMoveTrigger.kt:35}
 */
export class EntityMoveTrigger extends PostPacketTrigger<ClientboundTeleportEntityPacket> {
    static INSTANCE: EntityMoveTrigger;
    protected postPacketHandler(packet: ClientboundTeleportEntityPacket): void;
}