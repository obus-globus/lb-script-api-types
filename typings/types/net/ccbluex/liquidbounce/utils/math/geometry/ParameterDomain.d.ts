import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ParameterDomain extends Enum<ParameterDomain> {
    static FORWARD: ParameterDomain;
    static SEGMENT_01: ParameterDomain;
    static UNBOUNDED: ParameterDomain;
    static getEntries(): ParameterDomain[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): ParameterDomain;
    static values(): (Object | null)[];
    private constructor(lowerBound: number, upperBound: number)
    lowerBound: number;
    upperBound: number;
    forEachFiniteBoundary(action: (param0: number) => void): void;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L454 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:454}
     */
    normalize(parameter: number): number;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L470 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:470}
     */
    project(parameter: number): number;
    name(): "UNBOUNDED" | "FORWARD" | "SEGMENT_01";
}