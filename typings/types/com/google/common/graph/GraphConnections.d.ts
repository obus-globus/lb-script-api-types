import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Iterator } from '../../../../java/util/Iterator.d.ts'
export interface GraphConnections<N extends Object | number | string | boolean, V extends Object | number | string | boolean> extends Object{
    addPredecessor(node: N, value: V): void;
    addSuccessor(node: N, value: V): V;
    adjacentNodes(): N[];
    incidentEdgeIterator(thisNode: N): Iterator<N[]>;
    predecessors(): N[];
    removePredecessor(node: N): void;
    removeSuccessor(node: N): V;
    successors(): N[];
    value(node: N): V;
}