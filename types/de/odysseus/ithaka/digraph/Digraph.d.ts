import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Digraph<V extends Object | number | string | boolean> extends EdgeWeights<V>, Object{
    add(arg0: V): boolean;
    contains(arg0: V): boolean;
    contains(arg0: V, arg1: V): boolean;
    get(arg0: V, arg1: V): OptionalInt;
    getEdgeCount(): number;
    getOutDegree(arg0: V): number;
    getVertexCount(): number;
    isAcyclic(): boolean;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V): boolean;
    remove(arg0: V, arg1: V): OptionalInt;
    removeAll(arg0: E[]): void;
    reverse(): Digraph<V>;
    subgraph(arg0: V[]): Digraph<V>;
    targets(arg0: V): V[];
    totalWeight(): number;
    vertices(): V[];
}