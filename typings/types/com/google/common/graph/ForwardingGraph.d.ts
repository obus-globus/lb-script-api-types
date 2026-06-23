import type { AbstractGraph } from '../../../../com/google/common/graph/AbstractGraph.d.ts'
import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class ForwardingGraph<N extends unknown> extends AbstractGraph<N> {
    constructor()
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    degree(node: N): number;
    delegate(): BaseGraph<N>;
    edgeCount(): number;
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