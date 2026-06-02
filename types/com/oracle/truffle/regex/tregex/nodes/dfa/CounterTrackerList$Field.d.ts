import type { Class } from '../../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../../java/lang/Enum.d.ts'
export class CounterTrackerList$Field extends Enum<CounterTrackerList$Field> {
    static buffer: CounterTrackerList$Field;
    static offset: CounterTrackerList$Field;
    static size: CounterTrackerList$Field;
    static start: CounterTrackerList$Field;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): CounterTrackerList$Field;
    static values(): (Object | null)[];
    private constructor()
    name(): "start" | "size" | "offset" | "buffer";
}