import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ProcessInformation extends Object {
    static queryHandles(): Pair<Object, Object>;
    static queryIdleProcessCounters(): Pair<Object, Object>;
    static queryProcessCounters(): Pair<Object, Object>;
    private constructor()
}