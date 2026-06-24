import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { PredecessorsFunction } from '../../../../com/google/common/graph/PredecessorsFunction.d.ts'
import type { SuccessorsFunction } from '../../../../com/google/common/graph/SuccessorsFunction.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface ArchetypeGraph<N extends unknown> extends PredecessorsFunction<N>, SuccessorsFunction<N>, Object{
    adjacentNodes(node: N): N[];
    allowsSelfLoops(): boolean;
    degree(node: N): number;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    isDirected(): boolean;
    nodeOrder(): ElementOrder<N>;
    nodes(): N[];
    outDegree(node: N): number;
    predecessors(node: N): N[];
    successors(node: N): N[];
}