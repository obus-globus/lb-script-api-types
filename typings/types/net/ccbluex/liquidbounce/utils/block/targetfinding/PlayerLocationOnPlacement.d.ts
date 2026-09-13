import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pose } from '../../../../../../net/minecraft/world/entity/Pose.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
/**
 * Contains information about where the player will be _on placement_.
 *
 * @param position the player's position (on placement)
 * @param pose the player's pose (on placement)
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/6442c02e147c8fd9657f94f1554f63e786c2a3c0/src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt#L146 | src/main/kotlin/net/ccbluex/liquidbounce/utils/block/targetfinding/TargetFinding.kt:146}
 */
export class PlayerLocationOnPlacement extends Object {
    constructor(position: Vec3, pose: Pose)
    readonly eyeHeight: number;
    readonly eyePos: Vec3;
    readonly pose: Pose;
    readonly position: Vec3;
    component1(): Vec3;
    component2(): Pose;
    copy(position: Vec3, pose: Pose): PlayerLocationOnPlacement;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}