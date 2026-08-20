import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Functions from https://easings.net.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/a9cf2b145901ecd37d3f2a815c20cf0955e76853/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Easing.kt#L27 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Easing.kt:27}
 */
export class Easing extends Enum<Easing> implements Tagged {
    static Companion: Tagged$Companion;
    static EXPONENTIAL_IN: Easing;
    static EXPONENTIAL_OUT: Easing;
    static LINEAR: Easing;
    static NONE: Easing;
    static QUAD_IN: Easing;
    static QUAD_IN_OUT: Easing;
    static QUAD_OUT: Easing;
    static getEntries(): Easing[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): Easing;
    static values(): Easing[];
    private constructor(tag: string)
    readonly tag: string;
    getFactor(startTime: number, currentTime: number, time: number): number;
    transform(x: number): number;
    name(): "LINEAR" | "QUAD_IN" | "QUAD_OUT" | "QUAD_IN_OUT" | "EXPONENTIAL_IN" | "EXPONENTIAL_OUT" | "NONE";
}