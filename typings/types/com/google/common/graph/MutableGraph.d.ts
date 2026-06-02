import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MutableGraph<N extends Object | number | string | boolean> extends Graph<N>, Object{
    addNode(node: N): boolean;
    putEdge(nodeU: N, nodeV: N): boolean;
    putEdge(endpoints: N[]): boolean;
    removeEdge(nodeU: N, nodeV: N): boolean;
    removeEdge(endpoints: N[]): boolean;
    removeNode(node: N): boolean;
}