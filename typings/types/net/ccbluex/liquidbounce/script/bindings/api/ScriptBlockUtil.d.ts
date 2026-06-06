import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Block } from '../../../../../../net/minecraft/world/level/block/Block.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
/**
 * Object used by the script API to provide an
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil.kt#L26 | src/main/kotlin/net/ccbluex/liquidbounce/script/bindings/api/ScriptBlockUtil.kt:26}
 */
export class ScriptBlockUtil extends Object {
    static INSTANCE: ScriptBlockUtil;
    getBlock(blockPos: BlockPos): Block | null;
    getState(blockPos: BlockPos): BlockState | null;
    newBlockPos(x: number, y: number, z: number): BlockPos;
}