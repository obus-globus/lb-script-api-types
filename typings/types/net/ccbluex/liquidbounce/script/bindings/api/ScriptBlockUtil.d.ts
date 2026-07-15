import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Object used by the script API to provide an
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a5ddb940db67b41c2361cc2f2538fd3d365a625a/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil.kt:29}
 */
export class ScriptBlockUtil extends Object {
    static INSTANCE: ScriptBlockUtil;
    /**
     * Returns the block at the given position.
     *
     * @param blockPos the position to query
     */
    getBlock(blockPos: BlockPos): Block | null;
    /**
     * Returns the block state at the given position, or null if unavailable.
     *
     * @param blockPos the position to query
     */
    getState(blockPos: BlockPos): BlockState | null;
    /**
     * Creates a block position from integer coordinates.
     *
     * @param x the x coordinate
     * @param y the y coordinate
     * @param z the z coordinate
     */
    newBlockPos(x: number, y: number, z: number): BlockPos;
}