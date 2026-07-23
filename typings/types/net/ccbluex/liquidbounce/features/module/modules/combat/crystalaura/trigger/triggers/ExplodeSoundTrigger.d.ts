import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundSoundEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundSoundEntityPacket.d.ts'
/**
 * Runs placing when an explosion sound is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6f54ba6705b9d98f759a29be39e5aa97e877cc92/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt:33}
 */
export class ExplodeSoundTrigger extends PostPacketTrigger<ClientboundSoundEntityPacket> {
    static INSTANCE: ExplodeSoundTrigger;
    protected postPacketHandler(packet: ClientboundSoundEntityPacket): void;
}