import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class IntentTiming extends Enum<IntentTiming> {
    static INSTANT: IntentTiming;
    /**
     * Act during combat, but wait for a good moment (i.e. between hits, after a crit so the crit is not reset)
     *
     * Source: {@link https://github.com/CCBlueX/LiquidBounce/blob/5f1d924995c7360e0ec79e16298d37205eea4da3/src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt#L67 | src/main/kotlin/net/ccbluex/liquidbounce/features/module/modules/world/traps/BlockChangeIntent.kt:67}
     */
    static NEXT_PROPITIOUS_MOMENT: IntentTiming;
    static getEntries(): IntentTiming[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IntentTiming;
    static values(): (Object | null)[];
    private constructor()
    name(): "INSTANT" | "NEXT_PROPITIOUS_MOMENT";
}