import type { GpuDevice } from '../../../../../../../../com/mojang/blaze3d/systems/GpuDevice.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { SimulatedPlayer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { Minecraft } from '../../../../../../../../net/minecraft/client/Minecraft.d.ts'
import type { ClientLevel } from '../../../../../../../../net/minecraft/client/multiplayer/ClientLevel.d.ts'
import type { ClientPacketListener } from '../../../../../../../../net/minecraft/client/multiplayer/ClientPacketListener.d.ts'
import type { MultiPlayerGameMode } from '../../../../../../../../net/minecraft/client/multiplayer/MultiPlayerGameMode.d.ts'
import type { LocalPlayer } from '../../../../../../../../net/minecraft/client/player/LocalPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Prevents you from bumping into corners when chasing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L35 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:35}
 */
export class SpeedAntiCornerBump extends Object implements MinecraftShortcuts {
    static INSTANCE: SpeedAntiCornerBump;
    readonly gpuDevice: GpuDevice;
    readonly interaction: MultiPlayerGameMode;
    readonly mc: Minecraft;
    readonly network: ClientPacketListener;
    readonly player: LocalPlayer;
    readonly world: ClientLevel;
    /**
     * @param lastGroundPos the last position where the player was on ground
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L111 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:111}
     */
    canJumpOnBlock(collidingPos: Vec3, lastGroundPos: Vec3): boolean;
    /**
     * Used for blocks that are above the block we try to jump on. Checks if the player can enter the block pos
     * or if he would collide with the block and fall down.
     *
     * @param playerBox the player box. it's minY should be the top of the block we want to jump on.
     * @param tolerateLowBoundingBoxes if true, bounding boxes whose height is 0.2 or lower are ignored. This should be set if this block is directly above the block the player currently tries to jump on. Since in that case the player can also jump on that block (because of the jump height), regardless if there is a block two blocks above (because `1.8 (player height) + 0.2 = 2.0`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L210 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:210}
     */
    canPlayerEnterBlockPos(pos: BlockPos, blockState: BlockState, playerBox: AABB, tolerateLowBoundingBoxes: boolean): boolean;
    // private getSuggestedJumpDelay(simulatedPlayer: SimulatedPlayer, n: number): number | null;
    /**
     * Called when the speed mode might jump. Decides if the jump should be delayed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L39 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:39}
     */
    shouldDelayJump(): boolean;
    /**
     * Would we come to a stop at the given block due to collision?
     *
     * @param playerBox the player box at the moment he collides with the given block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/cc3ab309a7c1e7125c4a36b872e8efed54294ecc/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L178 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:178}
     */
    shouldJumpOnBlock(pos: BlockPos, blockState: BlockState, playerBox: AABB): boolean;
}