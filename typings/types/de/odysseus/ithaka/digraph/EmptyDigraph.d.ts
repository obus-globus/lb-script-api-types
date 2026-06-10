import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DoubledDigraph } from '../../../../de/odysseus/ithaka/digraph/DoubledDigraph.d.ts'
import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class EmptyDigraph<V extends Object | number | string | boolean> extends Object implements DoubledDigraph<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    constructor()
    add(arg0: Object): boolean;
    contains(arg0: Object): boolean;
    contains(arg0: Object, arg1: Object): boolean;
    get(arg0: Object, arg1: Object): OptionalInt;
    getEdgeCount(): number;
    getInDegree(arg0: Object): number;
    getOutDegree(arg0: Object): number;
    getVertexCount(): number;
    isAcyclic(): boolean;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V, arg1: V): OptionalInt;
    remove(arg0: Object): boolean;
    removeAll(arg0: V[]): void;
    reverse(): DoubledDigraph<V>;
    sources(arg0: Object): V[];
    subgraph(arg0: V[]): Digraph<V>;
    targets(arg0: Object): V[];
    totalWeight(): number;
    vertices(): V[];
}