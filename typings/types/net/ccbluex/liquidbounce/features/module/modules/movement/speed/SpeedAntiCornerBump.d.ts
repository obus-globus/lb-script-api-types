import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { MinecraftShortcuts } from '../../../../../../../../net/ccbluex/liquidbounce/features/module/MinecraftShortcuts.d.ts'
import type { SimulatedPlayer } from '../../../../../../../../net/ccbluex/liquidbounce/utils/entity/SimulatedPlayer.d.ts'
import type { BlockPos } from '../../../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { BlockState } from '../../../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Prevents you from bumping into corners when chasing.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L32 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:32}
 */
export class SpeedAntiCornerBump extends Object implements MinecraftShortcuts {
    static INSTANCE: SpeedAntiCornerBump;
    /**
     * @param lastGroundPos the last position where the player was on ground
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L108 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:108}
     */
    canJumpOnBlock(collidingPos: Vec3, lastGroundPos: Vec3): boolean;
    /**
     * Used for blocks that are above the block we try to jump on. Checks if the player can enter the block pos
     * or if he would collide with the block and fall down.
     *
     * @param playerBox the player box. it's minY should be the top of the block we want to jump on.
     * @param tolerateLowBoundingBoxes if true, bounding boxes whose height is 0.2 or lower are ignored. This should be set if this block is directly above the block the player currently tries to jump on. Since in that case the player can also jump on that block (because of the jump height), regardless if there is a block two blocks above (because `1.8 (player height) + 0.2 = 2.0`).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L200 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:200}
     */
    canPlayerEnterBlockPos(pos: BlockPos, blockState: BlockState, playerBox: AABB, tolerateLowBoundingBoxes: boolean): boolean;
    // private getSuggestedJumpDelay(simulatedPlayer: SimulatedPlayer, n: number): number | null;
    /**
     * Called when the speed mode might jump. Decides if the jump should be delayed.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L36 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:36}
     */
    shouldDelayJump(): boolean;
    /**
     * Would we come to a stop at the given block due to collision?
     *
     * @param playerBox the player box at the moment he collides with the given block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt#L173 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/movement/speed/SpeedAntiCornerBump.kt:173}
     */
    shouldJumpOnBlock(pos: BlockPos, blockState: BlockState, playerBox: AABB): boolean;
}