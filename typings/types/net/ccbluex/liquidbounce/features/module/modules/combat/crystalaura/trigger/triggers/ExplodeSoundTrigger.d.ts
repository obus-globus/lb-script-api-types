import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundSoundEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundSoundEntityPacket.d.ts'
/**
 * Runs placing when an explosion sound is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt#L30 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt:30}
 */
export class ExplodeSoundTrigger extends PostPacketTrigger<ClientboundSoundEntityPacket> {
    static INSTANCE: ExplodeSoundTrigger;
    protected postPacketHandler(packet: ClientboundSoundEntityPacket): void;
}