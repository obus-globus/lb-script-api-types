import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../../kotlin/Pair.d.ts'
import type { Triple } from '../../../../../kotlin/Triple.d.ts'
import type { CurveUtil$OnOutOfBounds } from '../../../../../net/ccbluex/liquidbounce/utils/math/CurveUtil$OnOutOfBounds.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
import type { Vector2fc } from '../../../../../org/joml/Vector2fc.d.ts'
/**
 * Chart.js spline interpolation
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/CurveUtil.kt#L29 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/CurveUtil.kt:29}
 */
export class CurveUtil extends Object {
    static INSTANCE: CurveUtil;
    /**
     * Find Y position at a given X using spline interpolation.
     *
     * @param data List of 2D points representing the curve
     * @param xPos X position to sample
     * @param tension Spline tension in range [0, 1] (out-of-range values are normalized)
     * @param onOutOfBounds Behavior for X values outside the curve domain, defaults to {@link OnOutOfBounds.CLAMP}
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/b759cac57b26e54694d8c4d48af024a8fb598f62/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/CurveUtil.kt#L51 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/CurveUtil.kt:51}
     */
    static transform(paramarg0: Vector2fc[], paramarg1: number, paramarg2: number): number;
    static transform(data: Vector2fc[], xPos: number, tension: number, onOutOfBounds: CurveUtil$OnOutOfBounds): number;
    static transformNormalized$liquidbounce(paramarg0: Vector2fc[], paramarg1: number, paramarg2: number, paramarg3: CurveUtil$OnOutOfBounds): number;
    // private calculateBezierY(t: number, p0: Vector2fc, p1: Vector2fc, p2: Vector2fc, p3: Vector2fc): number;
    // private calculateT(xPos: number, leftX: number, rightX: number): number;
    // private createSplineCurve(prev: Vector2fc, point: Vector2fc, next: Vector2fc, tension: number): Pair<Vector2f, Vector2f>;
    // private extrapolateLinear(data: Vector2fc[], xPos: number, isLeftSide: boolean): number;
    // private findControlPoints(data: Vector2fc[], xPos: number): Triple<Vector2fc, Vector2fc, Vector2fc>;
    // private findSecondControlPoint(data: Vector2fc[], currentNext: Vector2fc, tension: number): Vector2f;
    // private findYByExactX(data: Vector2fc[], xPos: number): number | null;
    // private interpolateLinear(p0: Vector2fc, p1: Vector2fc, xPos: number): number;
    // private interpolateSpline(data: Vector2fc[], xPos: number, tension: number): number;
    // private normalizeTension(tension: number): number;
    // private sortAndDeduplicateByX(data: Vector2fc[]): Vector2fc[];
    transform(data: Vector2fc[], xPos: number, tension: number, onOutOfBounds: CurveUtil$OnOutOfBounds): number;
    transformNormalized(data: Vector2fc[], xPos: number, tension: number, onOutOfBounds: CurveUtil$OnOutOfBounds): number;
}