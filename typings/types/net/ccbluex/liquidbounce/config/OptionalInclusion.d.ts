import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
/**
 * Groups of settings that can be optionally included or excluded during configuration saving.
 *
 * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/1dd09d11a76f588ec66d4eb9c06f470b5294257e/src/main/kotlin/net/ccbluex/liquidbounce/config/OptionalInclusion.kt#L25 | src/main/kotlin/net/ccbluex/liquidbounce/config/OptionalInclusion.kt:25}
 */
export class OptionalInclusion extends Enum<OptionalInclusion> {
    static FUN: OptionalInclusion;
    static RENDER: OptionalInclusion;
    static getEntries(): OptionalInclusion[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): OptionalInclusion;
    static values(): OptionalInclusion[];
    private constructor()
    name(): "RENDER" | "FUN";
}