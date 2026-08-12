import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class ParameterDomain extends Enum<ParameterDomain> {
    static FORWARD: ParameterDomain;
    static SEGMENT_01: ParameterDomain;
    static UNBOUNDED: ParameterDomain;
    static getEntries(): ParameterDomain[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): ParameterDomain;
    static values(): ParameterDomain[];
    private constructor(lowerBound: number, upperBound: number)
    lowerBound: number;
    upperBound: number;
    forEachFiniteBoundary(action: (param0: number) => void): void;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L457 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:457}
     */
    normalize(parameter: number): number;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/7a4298b687df27a16a801d477a542b03917e7306/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L473 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:473}
     */
    project(parameter: number): number;
    name(): "UNBOUNDED" | "FORWARD" | "SEGMENT_01";
}