import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * {@link positionBeforeMovement} matches the position from which Minecraft 26.2 performs item use
 * before the movement step represented by {@link tick}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/e1d0801ab2d0c9362f03f42cbfac7b36a2a05b6a/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L334 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:334}
 */
export class FallingPlayer$CollisionResult extends Object {
    constructor(pos: BlockPos | null, tick: number, positionBeforeMovement: Vec3)
    readonly pos: BlockPos | null;
    readonly positionBeforeMovement: Vec3;
    readonly tick: number;
}