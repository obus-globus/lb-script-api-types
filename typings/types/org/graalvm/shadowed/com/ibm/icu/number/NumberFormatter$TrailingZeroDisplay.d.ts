import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberFormatter$TrailingZeroDisplay extends Enum<NumberFormatter$TrailingZeroDisplay> {
    static AUTO: NumberFormatter$TrailingZeroDisplay;
    static HIDE_IF_WHOLE: NumberFormatter$TrailingZeroDisplay;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NumberFormatter$TrailingZeroDisplay;
    static values(): (Object | null)[];
    private constructor()
    name(): "AUTO" | "HIDE_IF_WHOLE";
}