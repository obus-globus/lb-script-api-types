import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundAddEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundAddEntityPacket.d.ts'
/**
 * Runs destroying when the information, that a crystal is spawned is received.
 *
 * When Set-Dead is enabled, this will also run placing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/3bc82a3329f49d9150e48b299ce4a5e8571a038d/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalSpawnTrigger.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/CrystalSpawnTrigger.kt:37}
 */
export class CrystalSpawnTrigger extends PostPacketTrigger<ClientboundAddEntityPacket> {
    static INSTANCE: CrystalSpawnTrigger;
    protected postPacketHandler(packet: ClientboundAddEntityPacket): void;
}