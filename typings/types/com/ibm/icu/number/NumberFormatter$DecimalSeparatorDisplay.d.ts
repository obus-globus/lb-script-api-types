import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberFormatter$DecimalSeparatorDisplay extends Enum<NumberFormatter$DecimalSeparatorDisplay> {
    static ALWAYS: NumberFormatter$DecimalSeparatorDisplay;
    static AUTO: NumberFormatter$DecimalSeparatorDisplay;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberFormatter$DecimalSeparatorDisplay;
    static values(): NumberFormatter$DecimalSeparatorDisplay[];
    private constructor()
    name(): "AUTO" | "ALWAYS";
}