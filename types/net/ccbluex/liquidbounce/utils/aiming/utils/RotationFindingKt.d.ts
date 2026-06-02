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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L451 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:451}
     */
    static canSeeBox(paramarg0: Vec3, paramarg1: AABB, paramarg2: number, paramarg3: number, paramarg4: BlockPos): boolean;
    /**
     * Find the best spot of the upper side of the block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L93 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:93}
     */
    static canSeeUpperBlockSide(paramarg0: Vec3, paramarg1: BlockPos, paramarg2: number, paramarg3: number): boolean;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L561 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:561}
     */
    static findClosestPointOnBlockInLineWithCrystal(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: BlockPos, paramarg4: boolean, paramarg5: Rotation[]): Pair<RotationWithVector, Direction>;
    static raytraceBlockRotation(paramarg0: Vec3, paramarg1: BlockPos, paramarg2: BlockState, paramarg3: number, paramarg4: number): RotationWithVector;
    static raytraceBlockSide(paramarg0: Direction, paramarg1: BlockPos, paramarg2: Vec3, paramarg3: number, paramarg4: number, paramarg5: CollisionContext): RotationWithVector;
    /**
     * Samples one block face across every box in a voxel shape and returns the globally best rotation.
     *
     * Visible hits are constrained by {@link rangeSquared}; non-visible hits may still be accepted within
     * {@link wallsRangeSquared}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L267 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:267}
     */
    static raytraceBlockSideBoxes(paramarg0: Direction, paramarg1: (Object | null)[], paramarg2: BlockPos, paramarg3: Vec3, paramarg4: number, paramarg5: number, paramarg6: (param0: Rotation) => kotlin.Boolean, paramarg7: VisibilityPredicate): RotationWithVector;
    /**
     * Find the best spot of a box to aim at.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L369 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:369}
     */
    static raytraceBox(paramarg0: Vec3, paramarg1: AABB, paramarg2: number, paramarg3: number, paramarg4: VisibilityPredicate, paramarg5: RotationPreference, paramarg6: AABB, paramarg7: boolean): RotationWithVector;
    /**
     * Samples all boxes that make up a shape and returns the globally best rotation across them.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L310 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:310}
     */
    static raytraceBoxes(paramarg0: Vec3, paramarg1: (Object | null)[], paramarg2: number, paramarg3: number, paramarg4: VisibilityPredicate, paramarg5: RotationPreference, paramarg6: AABB, paramarg7: boolean): RotationWithVector;
    /**
     * Find the best spot of the upper block side
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L510 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:510}
     */
    static raytraceUpperBlockSide(paramarg0: Vec3, paramarg1: number, paramarg2: number, paramarg3: BlockPos, paramarg4: RotationPreference, paramarg5: E[]): RotationWithVector;
}