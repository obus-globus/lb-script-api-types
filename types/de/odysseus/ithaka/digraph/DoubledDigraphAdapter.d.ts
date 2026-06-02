import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphAdapter } from '../../../../de/odysseus/ithaka/digraph/DigraphAdapter.d.ts'
import type { DigraphFactory } from '../../../../de/odysseus/ithaka/digraph/DigraphFactory.d.ts'
import type { DoubledDigraph } from '../../../../de/odysseus/ithaka/digraph/DoubledDigraph.d.ts'
import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DoubledDigraphAdapter<V extends Object | number | string | boolean> extends DigraphAdapter<V> implements DoubledDigraph<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    static getAdapterFactory(paramarg0: DigraphFactory<Object>): DigraphFactory<Object>;
    constructor()
    constructor(arg0: DigraphFactory<Digraph<V>>)
    constructor(arg0: DigraphFactory<Digraph<V>>, arg1: DoubledDigraphAdapter<V>)
    // private factory: DigraphFactory<Digraph<V>>;
    // private reverse: DoubledDigraphAdapter<V>;
    add(arg0: V): boolean;
    add0(arg0: V): boolean;
    createReverse(): DoubledDigraphAdapter<V>;
    getDelegateFactory(): DigraphFactory<Digraph<V>>;
    getDigraphFactory(): DigraphFactory<DoubledDigraph<V>>;
    getInDegree(arg0: V): number;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    put0(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V): boolean;
    remove(arg0: V, arg1: V): OptionalInt;
    remove0(arg0: V): boolean;
    remove0(arg0: V, arg1: V): OptionalInt;
    removeAll(arg0: E[]): void;
    removeAll0(arg0: E[]): void;
    reverse(): DoubledDigraphAdapter<V>;
    sources(arg0: V): V[];
    targets(arg0: V): V[];
    vertices(): V[];
}