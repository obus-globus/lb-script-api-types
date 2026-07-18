import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundSoundEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundSoundEntityPacket.d.ts'
/**
 * Runs placing when an explosion sound is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1f8feafa08d369aac1d83c7e0e334da0690fd875/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt:33}
 */
export class ExplodeSoundTrigger extends PostPacketTrigger<ClientboundSoundEntityPacket> {
    static INSTANCE: ExplodeSoundTrigger;
    protected postPacketHandler(packet: ClientboundSoundEntityPacket): void;
}