import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { PredecessorsFunction } from '../../../../com/google/common/graph/PredecessorsFunction.d.ts'
import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface Network<N extends unknown, E extends unknown> extends PredecessorsFunction<N>, SuccessorsFunction<N>, Object{
    adjacentEdges(edge: E): E[];
    adjacentNodes(node: N): N[];
    allowsParallelEdges(): boolean;
    allowsSelfLoops(): boolean;
    asGraph(): Graph<N>;
    degree(node: N): number;
    edgeConnecting(nodeU: N, nodeV: N): Optional<E>;
    edgeConnecting(endpoints: N[]): Optional<E>;
    edgeConnectingOrNull(nodeU: N, nodeV: N): E;
    edgeConnectingOrNull(endpoints: N[]): E;
    edgeOrder(): ElementOrder<E>;
    edges(): E[];
    edgesConnecting(nodeU: N, nodeV: N): E[];
    edgesConnecting(endpoints: N[]): E[];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    inEdges(node: N): E[];
    incidentEdges(node: N): E[];
    incidentNodes(edge: E): N[];
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    outEdges(node: N): E[];
    predecessors(node: N): N[];
    successors(node: N): N[];
}