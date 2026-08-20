import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { ClientboundSoundEntityPacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundSoundEntityPacket.d.ts'
/**
 * Runs placing when an explosion sound is received.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt#L33 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/ExplodeSoundTrigger.kt:33}
 */
export class ExplodeSoundTrigger extends PostPacketTrigger<ClientboundSoundEntityPacket> {
    static INSTANCE: ExplodeSoundTrigger;
    protected postPacketHandler(packet: ClientboundSoundEntityPacket): void;
}