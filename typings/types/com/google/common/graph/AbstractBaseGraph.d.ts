import type { BaseGraph } from '../../../../com/google/common/graph/BaseGraph.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractBaseGraph<N extends unknown> extends Object implements BaseGraph<N> {
    constructor()
    asNetwork(): Network<N, N[]>;
    degree(node: N): number;
    edgeCount(): number;
    edges(): N[][];
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    inDegree(node: N): number;
    incidentEdgeOrder(): ElementOrder<N>;
    incidentEdges(node: N): N[][];
    isOrderingCompatible(endpoints: Object[]): boolean;
    nodeInvalidatableSet<T extends unknown>(set: T[], node: N): T[];
    nodePairInvalidatableSet<T extends unknown>(set: T[], nodeU: N, nodeV: N): T[];
    outDegree(node: N): number;
    validateEndpoints(endpoints: Object[]): void;
}