import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class NumberFormatter$GroupingStrategy extends Enum<NumberFormatter$GroupingStrategy> {
    static AUTO: NumberFormatter$GroupingStrategy;
    static MIN2: NumberFormatter$GroupingStrategy;
    static OFF: NumberFormatter$GroupingStrategy;
    static ON_ALIGNED: NumberFormatter$GroupingStrategy;
    static THOUSANDS: NumberFormatter$GroupingStrategy;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): NumberFormatter$GroupingStrategy;
    static values(): NumberFormatter$GroupingStrategy[];
    private constructor()
    name(): "OFF" | "MIN2" | "AUTO" | "ON_ALIGNED" | "THOUSANDS";
}