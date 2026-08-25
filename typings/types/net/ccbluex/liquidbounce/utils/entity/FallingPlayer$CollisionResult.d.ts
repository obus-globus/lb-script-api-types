import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { BlockPos } from '../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Vec3 } from '../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * {@link positionBeforeMovement} matches the position from which Minecraft 26.2 performs item use
 * before the movement step represented by {@link tick}.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt#L334 | src/main/kotlin/net/ccbluex/liquidbounce/utils/entity/FallingPlayer.kt:334}
 */
export class FallingPlayer$CollisionResult extends Object {
    constructor(pos: BlockPos | null, tick: number, positionBeforeMovement: Vec3)
    readonly pos: BlockPos | null;
    readonly positionBeforeMovement: Vec3;
    readonly tick: number;
}