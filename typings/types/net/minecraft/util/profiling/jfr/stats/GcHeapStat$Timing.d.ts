import type { Class } from '../../../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Enum } from '../../../../../../java/lang/Enum.d.ts'
export class GcHeapStat$Timing extends Enum<GcHeapStat$Timing> {
    static AFTER_GC: GcHeapStat$Timing;
    static BEFORE_GC: GcHeapStat$Timing;
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): GcHeapStat$Timing;
    static values(): GcHeapStat$Timing[];
    private constructor()
    name(): "BEFORE_GC" | "AFTER_GC";
}