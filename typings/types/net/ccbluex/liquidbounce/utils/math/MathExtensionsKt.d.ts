import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class MathExtensionsKt extends Object {
    static ceilToInt(paramarg0: number): number;
    static ceilToInt(paramarg0: number): number;
    static fastCos(paramarg0: number): number;
    static fastCos(paramarg0: number): number;
    static fastSin(paramarg0: number): number;
    static fastSin(paramarg0: number): number;
    static floorToInt(paramarg0: number): number;
    static floorToInt(paramarg0: number): number;
    static high32(long: number): number;
    static longFrom32(high: number, low: number): number;
    static low32(long: number): number;
    /**
     * Rounds the given number to the specified decimal place (the first by default).
     * For additional info see [RoundingMode#HALF_UP].
     *
     * For example ```roundToNDecimalPlaces(1234.567,decimalPlaces=1)``` will
     * return ```1234.6```.
     *
     * @returns The rounded value
     * @see https://stackoverflow.com/a/2808648/9140494
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/707b7339b27ee1da75cb769c96b0d9d292d0a8ad/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MathExtensions.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MathExtensions.kt:53}
     */
    static roundToDecimalPlaces(paramarg0: number, paramarg1: number): number;
    static roundToDecimalPlaces(paramarg0: number, paramarg1: number): number;
    static toDegrees(paramarg0: number): number;
    static toDegrees(paramarg0: number): number;
    static toRadians(paramarg0: number): number;
    static toRadians(paramarg0: number): number;
    static vector2f(float: number, other: number): Vector2f;
}