import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Pair } from '../../../../oshi/util/tuples/Pair.d.ts'
export class ThreadInformation extends Object {
    static queryThreadCounters(): Pair<Object, Object>;
    static queryThreadCounters(paramarg0: string, paramarg1: number): Pair<Object, Object>;
    private constructor()
}