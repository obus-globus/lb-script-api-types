import type { Class } from '../../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../../java/lang/Enum.d.ts'
export class IntentTiming extends Enum<IntentTiming> {
    static INSTANT: IntentTiming;
    static NEXT_PROPITIOUS_MOMENT: IntentTiming;
    static getEntries(): IntentTiming[];
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): IntentTiming;
    static values(): (Object | null)[];
    private constructor()
    name(): "INSTANT" | "NEXT_PROPITIOUS_MOMENT";
}