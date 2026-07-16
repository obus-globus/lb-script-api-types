import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class DateFormat$HourCycle extends Enum<DateFormat$HourCycle> {
    static HOUR_CYCLE_11: DateFormat$HourCycle;
    static HOUR_CYCLE_12: DateFormat$HourCycle;
    static HOUR_CYCLE_23: DateFormat$HourCycle;
    static HOUR_CYCLE_24: DateFormat$HourCycle;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramarg0: string): DateFormat$HourCycle;
    static values(): DateFormat$HourCycle[];
    private constructor()
    name(): "HOUR_CYCLE_11" | "HOUR_CYCLE_12" | "HOUR_CYCLE_23" | "HOUR_CYCLE_24";
}