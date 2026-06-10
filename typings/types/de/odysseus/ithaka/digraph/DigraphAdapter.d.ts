import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class DigraphAdapter<V extends Object | number | string | boolean> extends Object implements Digraph<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    constructor(arg0: Digraph<V>)
    // private delegate: Digraph<V>;
    add(arg0: V): boolean;
    contains(arg0: V): boolean;
    contains(arg0: V, arg1: V): boolean;
    equals(arg0: Object | null): boolean;
    get(arg0: V, arg1: V): OptionalInt;
    getEdgeCount(): number;
    getOutDegree(arg0: V): number;
    getVertexCount(): number;
    hashCode(): number;
    isAcyclic(): boolean;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V): boolean;
    remove(arg0: V, arg1: V): OptionalInt;
    removeAll(arg0: V[]): void;
    reverse(): Digraph<V>;
    subgraph(arg0: V[]): Digraph<V>;
    targets(arg0: V): V[];
    toString(): string;
    totalWeight(): number;
    vertices(): V[];
}