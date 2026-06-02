import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class NumberFormatter$GroupingStrategy extends Enum<NumberFormatter$GroupingStrategy> {
    static AUTO: NumberFormatter$GroupingStrategy;
    static MIN2: NumberFormatter$GroupingStrategy;
    static OFF: NumberFormatter$GroupingStrategy;
    static ON_ALIGNED: NumberFormatter$GroupingStrategy;
    static THOUSANDS: NumberFormatter$GroupingStrategy;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): NumberFormatter$GroupingStrategy;
    static values(): (Object | null)[];
    private constructor()
    name(): "OFF" | "MIN2" | "AUTO" | "ON_ALIGNED" | "THOUSANDS";
}