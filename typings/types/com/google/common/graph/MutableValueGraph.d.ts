import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export interface MutableValueGraph<N extends unknown, V extends unknown> extends ValueGraph<N, V>, Object{
    addNode(node: N): boolean;
    putEdgeValue(nodeU: N, nodeV: N, value: V): V;
    putEdgeValue(endpoints: N[], value: V): V;
    removeEdge(nodeU: N, nodeV: N): V;
    removeEdge(endpoints: N[]): V;
    removeNode(node: N): boolean;
}