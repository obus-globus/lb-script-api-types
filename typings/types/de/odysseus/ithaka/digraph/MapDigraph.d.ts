import type { Digraph } from '../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { DigraphFactory } from '../../../../de/odysseus/ithaka/digraph/DigraphFactory.d.ts'
import type { EdgeWeights } from '../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { MapDigraph$EdgeMapFactory } from '../../../../de/odysseus/ithaka/digraph/MapDigraph$EdgeMapFactory.d.ts'
import type { MapDigraph$VertexMapFactory } from '../../../../de/odysseus/ithaka/digraph/MapDigraph$VertexMapFactory.d.ts'
import type { Comparator } from '../../../../java/util/Comparator.d.ts'
import type { OptionalInt } from '../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class MapDigraph<V extends Object | number | string | boolean> extends Object implements Digraph<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    static getDefaultDigraphFactory(): DigraphFactory<Object>;
    static getMapDigraphFactory(paramarg0: MapDigraph$VertexMapFactory<Object>, paramarg1: MapDigraph$EdgeMapFactory<Object>): DigraphFactory<Object>;
    constructor()
    constructor(arg0: MapDigraph$VertexMapFactory<V>, arg1: MapDigraph$EdgeMapFactory<V>)
    constructor(arg0: (param0: V) => kotlin.Boolean)
    constructor(arg0: (param0: V) => kotlin.Boolean, arg1: (param0: V) => kotlin.Boolean)
    readonly edgeCount: number;
    // private edgeMapFactory: MapDigraph$EdgeMapFactory<V>;
    // private vertexMap: Map<V, Object2IntMap<V>>;
    // private vertexMapFactory: MapDigraph$VertexMapFactory<V>;
    add(arg0: V): boolean;
    contains(arg0: V): boolean;
    contains(arg0: V, arg1: V): boolean;
    get(arg0: V, arg1: V): OptionalInt;
    getDigraphFactory(): DigraphFactory<MapDigraph<V>>;
    getEdgeCount(): number;
    getOutDegree(arg0: V): number;
    getVertexCount(): number;
    isAcyclic(): boolean;
    put(arg0: V, arg1: V, arg2: number): OptionalInt;
    remove(arg0: V): boolean;
    remove(arg0: V, arg1: V): OptionalInt;
    removeAll(arg0: E[]): void;
    reverse(): MapDigraph<V>;
    subgraph(arg0: V[]): MapDigraph<V>;
    targets(arg0: V): V[];
    toString(): string;
    totalWeight(): number;
    vertices(): V[];
}