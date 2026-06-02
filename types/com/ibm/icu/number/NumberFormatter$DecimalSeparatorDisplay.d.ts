import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberFormatter$DecimalSeparatorDisplay extends Enum<NumberFormatter$DecimalSeparatorDisplay> {
    static ALWAYS: NumberFormatter$DecimalSeparatorDisplay;
    static AUTO: NumberFormatter$DecimalSeparatorDisplay;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): NumberFormatter$DecimalSeparatorDisplay;
    static values(): (Object | null)[];
    private constructor()
    name(): "AUTO" | "ALWAYS";
}