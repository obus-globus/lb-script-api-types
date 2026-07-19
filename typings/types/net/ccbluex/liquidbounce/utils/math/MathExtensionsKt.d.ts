import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vector2f } from '../../../../../org/joml/Vector2f.d.ts'
export class MathExtensionsKt extends Object {
    static ceilToInt(self: number): number;
    static fastCos(self: number): number;
    static fastSin(self: number): number;
    static floorToInt(self: number): number;
    static high32(self: number): number;
    static longFrom32(high: number, low: number): number;
    static low32(self: number): number;
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
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5fb8050f7806fb9d37e33d22e5a85de863329bac/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MathExtensions.kt#L53 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/MathExtensions.kt:53}
     */
    static roundToDecimalPlaces(self: number, decimalPlaces: number): number;
    static toDegrees(self: number): number;
    static toRadians(self: number): number;
    static vector2f(self: number, other: number): Vector2f;
}