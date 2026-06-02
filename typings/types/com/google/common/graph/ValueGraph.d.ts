import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ValueGraph<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends BaseGraph<N>, Object{
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    asGraph(): Graph<N>;
    degree(node: N): number;
    edgeValue(nodeU: N, nodeV: N): Optional<V>;
    edgeValue(endpoints: N[]): Optional<V>;
    edgeValueOrDefault(nodeU: N, nodeV: N, defaultValue: V): V;
    edgeValueOrDefault(endpoints: N[], defaultValue: V): V;
    edges(): N[][];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdgeOrder(): ElementOrder<N>;
    incidentEdges(node: N): N[][];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}