import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Tagged } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged.d.ts'
import type { Tagged$Companion } from '../../../../../net/ccbluex/liquidbounce/config/types/list/Tagged$Companion.d.ts'
/**
 * Functions from https://easings.net.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/fac52d9c85c85141cb327e00599cdf8e0a7afc66/src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Easing.kt#L24 | src/main/kotlin/net/ccbluex/liquidbounce/utils/math/Easing.kt:24}
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
    static makeLookupTable(paramarg0: (Object | null)[]): { [key: string]: Object | null };
    static of(paramarg0: string): Tagged;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): Easing;
    static values(): (Object | null)[];
    private constructor(tag: string)
    readonly tag: string;
    getFactor(startTime: number, currentTime: number, time: number): number;
    transform(x: number): number;
    name(): "LINEAR" | "QUAD_IN" | "QUAD_OUT" | "QUAD_IN_OUT" | "EXPONENTIAL_IN" | "EXPONENTIAL_OUT" | "NONE";
}