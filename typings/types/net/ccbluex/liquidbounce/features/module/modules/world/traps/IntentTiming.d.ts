import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class IntentTiming extends Enum<IntentTiming> {
    static INSTANT: IntentTiming;
    static NEXT_PROPITIOUS_MOMENT: IntentTiming;
    static getEntries(): IntentTiming[];
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(value: string): IntentTiming;
    static values(): IntentTiming[];
    private constructor()
    name(): "INSTANT" | "NEXT_PROPITIOUS_MOMENT";
}