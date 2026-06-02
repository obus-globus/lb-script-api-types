import type { AbstractDirectedNetworkConnections } from '../../../../com/google/common/graph/AbstractDirectedNetworkConnections.d.ts'
import type { Reference } from '../../../../java/lang/ref/Reference.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class DirectedMultiNetworkConnections<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends AbstractDirectedNetworkConnections<N, E> {
    private constructor(inEdges: Map<E, N>, outEdges: Map<E, N>, selfLoopCount: number)
    // private predecessorsReference: Reference<N[]>;
    // private successorsReference: Reference<N[]>;
    addInEdge(edge: E, node: N, isSelfLoop: boolean): void;
    addOutEdge(edge: E, node: N): void;
    edgesConnecting(node: N): E[];
    predecessors(): N[];
    // private predecessorsMultiset(): N[];
    removeInEdge(edge: E, isSelfLoop: boolean): N;
    removeOutEdge(edge: E): N;
    successors(): N[];
    // private successorsMultiset(): N[];
}