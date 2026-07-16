import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberFormatter$TrailingZeroDisplay extends Enum<NumberFormatter$TrailingZeroDisplay> {
    static AUTO: NumberFormatter$TrailingZeroDisplay;
    static HIDE_IF_WHOLE: NumberFormatter$TrailingZeroDisplay;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): NumberFormatter$TrailingZeroDisplay;
    static values(): NumberFormatter$TrailingZeroDisplay[];
    private constructor()
    name(): "AUTO" | "HIDE_IF_WHOLE";
}