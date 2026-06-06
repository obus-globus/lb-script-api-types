import type { Comparator } from '../../../../../../java/util/Comparator.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../../kotlin/Pair.d.ts'
import type { Rotation } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/Rotation.d.ts'
import type { RotationWithVector } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/data/RotationWithVector.d.ts'
import type { RotationPreference } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/preference/RotationPreference.d.ts'
import type { VisibilityPredicate } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/VisibilityPredicate.d.ts'
import type { BlockPos } from '../../../../../../net/minecraft/core/BlockPos.d.ts'
import type { Direction } from '../../../../../../net/minecraft/core/Direction.d.ts'
import type { BlockState } from '../../../../../../net/minecraft/world/level/block/state/BlockState.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
import type { CollisionContext } from '../../../../../../net/minecraft/world/phys/shapes/CollisionContext.d.ts'
export class RotationFindingKt extends Object {
    /**
     * Determines if the player is able to see a {@link AABB}.
     *
     * Will return `true` if the player is inside the {@link box}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L451 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:451}
     */
    static canSeeBox(eyes: Vec3, box: AABB, range: number, wallsRange: number, expectedTarget: BlockPos): boolean;
    /**
     * Find the best spot of the upper side of the block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:93}
     */
    static canSeeUpperBlockSide(eyes: Vec3, pos: BlockPos, range: number, wallsRange: number): boolean;
    /**
     * Finds the rotation to the closest point on the {@link expectedTarget}, that if possible also points to the crystal that
     * will that could be above the position.
     *
     * {@link notFacingAway} will make the function not return any rotation to a face that is pointing away from the player.
     *
     * The function also takes {@link rotationsNotToMatch}.
     * Those rotations will be skipped, except if the current rotation equals one of them, then the list is simply ignored,
     * and the current list is returned.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L561 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:561}
     */
    static findClosestPointOnBlockInLineWithCrystal(eyes: Vec3, range: number, wallsRange: number, expectedTarget: BlockPos, notFacingAway: boolean, rotationsNotToMatch: Rotation[]): Pair<RotationWithVector, Direction>;
    static raytraceBlockRotation(eyes: Vec3, pos: BlockPos, state: BlockState, range: number, wallsRange: number): RotationWithVector;
    static raytraceBlockSide(side: Direction, pos: BlockPos, eyes: Vec3, rangeSquared: number, wallsRangeSquared: number, collisionContext: CollisionContext): RotationWithVector;
    /**
     * Samples one block face across every box in a voxel shape and returns the globally best rotation.
     *
     * Visible hits are constrained by {@link rangeSquared}; non-visible hits may still be accepted within
     * {@link wallsRangeSquared}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L267 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:267}
     */
    static raytraceBlockSideBoxes(side: Direction, boxes: (Object | null)[], offset: BlockPos, eyes: Vec3, rangeSquared: number, wallsRangeSquared: number, rotationPreference: (param0: Rotation) => kotlin.Boolean, visibilityPredicate: VisibilityPredicate): RotationWithVector;
    /**
     * Find the best spot of a box to aim at.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L369 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:369}
     */
    static raytraceBox(eyes: Vec3, box: AABB, range: number, wallsRange: number, visibilityPredicate: VisibilityPredicate, rotationPreference: RotationPreference, futureTarget: AABB, prioritizeVisible: boolean): RotationWithVector;
    /**
     * Samples all boxes that make up a shape and returns the globally best rotation across them.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L310 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:310}
     */
    static raytraceBoxes(eyes: Vec3, boxes: (Object | null)[], range: number, wallsRange: number, visibilityPredicate: VisibilityPredicate, rotationPreference: RotationPreference, futureTarget: AABB, prioritizeVisible: boolean): RotationWithVector;
    /**
     * Find the best spot of the upper block side
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L510 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:510}
     */
    static raytraceUpperBlockSide(eyes: Vec3, range: number, wallsRange: number, expectedTarget: BlockPos, rotationPreference: RotationPreference, rotationsNotToMatch: E[]): RotationWithVector;
}