import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CounterTrackerList$Field extends Enum<CounterTrackerList$Field> {
    static buffer: CounterTrackerList$Field;
    static offset: CounterTrackerList$Field;
    static size: CounterTrackerList$Field;
    static start: CounterTrackerList$Field;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): CounterTrackerList$Field;
    static values(): CounterTrackerList$Field[];
    private constructor()
    name(): "start" | "size" | "offset" | "buffer";
}