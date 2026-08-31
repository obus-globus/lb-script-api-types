import type { PostPacketTrigger } from '../../../../../../../../../../net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/PostPacketTrigger.d.ts'
import type { BlockPos } from '../../../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { ClientboundBlockUpdatePacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundBlockUpdatePacket.d.ts'
import type { ClientboundSectionBlocksUpdatePacket } from '../../../../../../../../../../net/minecraft/network/protocol/game/ClientboundSectionBlocksUpdatePacket.d.ts'
import type { Vec3 } from '../../../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Runs placing right when a block was broken in the area where the aura operates.
 * This can help to block the surround of enemies with immediate placements.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e67fdf9b70131f478c5894cf9de1f2d4aa7a95ce/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/BlockChangeTrigger.kt#L37 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/combat/crystalaura/trigger/triggers/BlockChangeTrigger.kt:37}
 */
export class BlockChangeTrigger extends PostPacketTrigger<ClientboundBlockUpdatePacket> {
    static INSTANCE: BlockChangeTrigger;
    postChunkUpdateHandler(packet: ClientboundSectionBlocksUpdatePacket): void;
    protected postPacketHandler(packet: ClientboundBlockUpdatePacket): void;
    // private tickIfInRange(blockPos: BlockPos, eyePos: Vec3, rangeSq: number): boolean;
}