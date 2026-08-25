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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L457 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:457}
     */
    static canSeeBox(eyes: Vec3, box: AABB, range: number, wallsRange: number, expectedTarget: BlockPos | null): boolean;
    /**
     * Find the best spot of the upper side of the block
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L97 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:97}
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L572 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:572}
     */
    static findClosestPointOnBlockInLineWithCrystal(eyes: Vec3, range: number, wallsRange: number, expectedTarget: BlockPos, notFacingAway: boolean, rotationsNotToMatch: Rotation[] | null): Pair<RotationWithVector, Direction> | null;
    static raytraceBlockRotation(eyes: Vec3, pos: BlockPos, state: BlockState, range: number, wallsRange: number): RotationWithVector | null;
    static raytraceBlockSide(side: Direction, pos: BlockPos, eyes: Vec3, rangeSquared: number, wallsRangeSquared: number, collisionContext: CollisionContext): RotationWithVector | null;
    /**
     * Samples one block face across every box in a voxel shape and returns the globally best rotation.
     *
     * Visible hits are constrained by {@link rangeSquared}; non-visible hits may still be accepted within
     * {@link wallsRangeSquared}.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L274 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:274}
     */
    static raytraceBlockSideBoxes(side: Direction, boxes: AABB[], offset: BlockPos, eyes: Vec3, rangeSquared: number, wallsRangeSquared: number, rotationPreference: (param0: Rotation, param1: Rotation) => number, visibilityPredicate: VisibilityPredicate): RotationWithVector | null;
    /**
     * Find the best spot of a box to aim at.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L374 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:374}
     */
    static raytraceBox(eyes: Vec3, box: AABB, range: number, wallsRange: number, visibilityPredicate: VisibilityPredicate, rotationPreference: RotationPreference, futureTarget: AABB | null, prioritizeVisible: boolean): RotationWithVector | null;
    /**
     * Samples all boxes that make up a shape and returns the globally best rotation across them.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L314 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:314}
     */
    static raytraceBoxes(eyes: Vec3, boxes: AABB[], range: number, wallsRange: number, visibilityPredicate: VisibilityPredicate, rotationPreference: RotationPreference, futureTarget: AABB | null, prioritizeVisible: boolean): RotationWithVector | null;
    /**
     * Find the best spot of the upper block side
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt#L515 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/RotationFinding.kt:515}
     */
    static raytraceUpperBlockSide(eyes: Vec3, range: number, wallsRange: number, expectedTarget: BlockPos, rotationPreference: RotationPreference, rotationsNotToMatch: Rotation[] | null): RotationWithVector | null;
}