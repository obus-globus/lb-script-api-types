import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MutableNetwork<N extends Object | number | string | boolean, E extends Object | number | string | boolean> extends Network<N, E>, Object{
    addEdge(nodeU: N, nodeV: N, edge: E): boolean;
    addEdge(endpoints: N[], edge: E): boolean;
    addNode(node: N): boolean;
    removeEdge(edge: E): boolean;
    removeNode(node: N): boolean;
}