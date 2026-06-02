import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
/**
 * Runs destroying when the information, that a crystal is spawned is received.
 *
 * When Set-Dead is enabled, this will also run placing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalSpawnTrigger.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalSpawnTrigger.kt:32}
 */
export class CrystalSpawnTrigger extends PostPacketTrigger<ClientboundAddEntityPacket> {
    static INSTANCE: CrystalSpawnTrigger;
    protected postPacketHandler(packet: ClientboundAddEntityPacket): void;
}