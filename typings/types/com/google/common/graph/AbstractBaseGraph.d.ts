import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractBaseGraph<N extends Object | number | string | boolean> extends Object implements BaseGraph<N> {
    constructor()
    degree(node: N): number;
    edgeCount(): number;
    edges(): N[][];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdgeOrder(): ElementOrder<N>;
    incidentEdges(node: N): N[][];
    isOrderingCompatible(endpoints: Object[]): boolean;
    nodeInvalidatableSet<T extends Object | number | string | boolean>(set: T[], node: N): T[];
    nodePairInvalidatableSet<T extends Object | number | string | boolean>(set: T[], nodeU: N, nodeV: N): T[];
    outDegree(node: N): number;
    validateEndpoints(endpoints: Object[]): void;
}