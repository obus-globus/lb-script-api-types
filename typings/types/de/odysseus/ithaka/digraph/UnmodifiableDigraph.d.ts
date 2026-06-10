import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphAdapter } from '../../../../de/odysseus/ithaka/digraph/DigraphAdapter.d.ts'
import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class UnmodifiableDigraph<V extends Object | number | string | boolean> extends DigraphAdapter<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    constructor(arg0: Digraph<V>)
    add(arg0: V): boolean;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V): boolean;
    remove(arg0: V, arg1: V): OptionalInt;
    removeAll(arg0: V[]): void;
}