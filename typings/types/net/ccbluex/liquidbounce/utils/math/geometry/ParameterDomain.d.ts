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
    static values(): ParameterDomain[];
    private constructor(lowerBound: number, upperBound: number)
    lowerBound: number;
    upperBound: number;
    forEachFiniteBoundary(action: (param0: number) => void): void;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L457 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:457}
     */
    normalize(parameter: number): number;
    /**
     * @returns {@link Double.NaN} if {@link parameter} out of bounds
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/650f694b6a7a35f7b117bc6958055e8b541fc43e/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt#L473 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/geometry/LinearGeometry3.kt:473}
     */
    project(parameter: number): number;
    name(): "UNBOUNDED" | "FORWARD" | "SEGMENT_01";
}