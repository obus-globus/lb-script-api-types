import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { RotationMatrices } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/RotationMatrices.d.ts'
import type { VisibilityPredicate } from '../../../../../../net/ccbluex/liquidbounce/utils/aiming/utils/VisibilityPredicate.d.ts'
import type { AABB } from '../../../../../../net/minecraft/world/phys/AABB.d.ts'
import type { Vec3 } from '../../../../../../net/minecraft/world/phys/Vec3.d.ts'
export class PointFindingKt extends Object {
    /**
     * Finds a point that is visible from the virtual eyes.
     *
     * ## Algorithm
     * 1. Projects points on the box from the virtual eyes.
     * 2. Sorts the points by distance to the box center.
     * 3. For each point:
     *      - Creates a ray starting from the point, extending for twice the range.
     *      - Raycasts the ray against the box to find the intersection point.
     *      - Checks if the intersection point is within the range and satisfies the {@link visibilityPredicate}.
     * 4. Returns the first visible point found, or null if no point is visible.
     *
     * @param rangeToTest The maximum distance to test for visibility.
     * @param visibilityPredicate An optional predicate to determine if a given point is visible
     * @returns the best visible spot found or `null`
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt#L149 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt:149}
     */
    static findVisiblePointFromVirtualEye(virtualEyes: Vec3, box: AABB, rangeToTest: number, visibilityPredicate: VisibilityPredicate): Vec3;
    /**
     * Creates rotation matrices: The first allows to turn the vec (1.0, 0.0, 0.0) into the given {@link vec}.
     * The second allows to turn the given vec into (1.0, 0.0, 0.0).
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt#L52 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt:52}
     */
    static getRotationMatricesForVec(vec: Vec3): RotationMatrices;
    /**
     * Projects points onto the {@link targetBox}. The points are uniformly distributed from the perspective of {@link virtualEye}.
     *
     * @returns a list of projected points, or null if the virtual eye is inside the target box.
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt#L68 | src/main/kotlin/net/ccbluex/liquidbounce/utils/aiming/utils/PointFinding.kt:68}
     */
    static projectPointsOnBox(virtualEye: Vec3, targetBox: AABB, maxPoints: number, consumer: (param0: Object) => void): boolean;
    static projectPointsOnBox(virtualEye: Vec3, targetBox: AABB, maxPoints: number): Vec3[];
}