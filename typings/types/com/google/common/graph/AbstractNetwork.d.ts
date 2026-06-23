import type { Predicate } from '../../../../com/google/common/base/Predicate.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractNetwork<N extends unknown, E extends unknown> extends Object implements Network<N, E> {
    constructor()
    adjacentEdges(edge: E): E[];
    asGraph(): Graph<N>;
    // private connectedPredicate(nodePresent: N, nodeToCheck: N): (param0: Object) => boolean;
    degree(node: N): number;
    edgeConnecting(nodeU: N, nodeV: N): Optional<E>;
    edgeConnecting(endpoints: N[]): Optional<E>;
    edgeConnectingOrNull(nodeU: N, nodeV: N): E;
    edgeConnectingOrNull(endpoints: N[]): E;
    edgeInvalidatableSet<T extends unknown>(set: T[], edge: E): T[];
    edgesConnecting(nodeU: N, nodeV: N): E[];
    edgesConnecting(endpoints: N[]): E[];
    equals(obj: Object | null): boolean;
    hasEdgeConnecting(nodeU: N, nodeV: N): boolean;
    hasEdgeConnecting(endpoints: N[]): boolean;
    hashCode(): number;
    inDegree(node: N): number;
    isOrderingCompatible(endpoints: Object[]): boolean;
    nodeInvalidatableSet<T extends unknown>(set: T[], node: N): T[];
    nodePairInvalidatableSet<T extends unknown>(set: T[], nodeU: N, nodeV: N): T[];
    outDegree(node: N): number;
    toString(): string;
    validateEndpoints(endpoints: Object[]): void;
}