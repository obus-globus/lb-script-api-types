import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pose } from '../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Contains information about where the player will be _on placement_.
 *
 * @param position the player's position (on placement)
 * @param pose the player's pose (on placement)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/64f9c02ca90d2728f0d1fffd459b622eb8239747/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:149}
 */
export class PlayerLocationOnPlacement extends Object {
    constructor(position: Vec3, pose: Pose)
    readonly eyeHeight: number;
    readonly eyePos: Vec3;
    readonly pose: Pose;
    readonly position: Vec3;
}