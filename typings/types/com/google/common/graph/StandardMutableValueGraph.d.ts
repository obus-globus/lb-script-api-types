import type { AbstractGraphBuilder } from '../../../../com/google/common/graph/AbstractGraphBuilder.d.ts'
import type { ElementOrder } from '../../../../com/google/common/graph/ElementOrder.d.ts'
import type { GraphConnections } from '../../../../com/google/common/graph/GraphConnections.d.ts'
import type { MutableValueGraph } from '../../../../com/google/common/graph/MutableValueGraph.d.ts'
import type { StandardValueGraph } from '../../../../com/google/common/graph/StandardValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class StandardMutableValueGraph<N extends unknown, V extends unknown> extends StandardValueGraph<N, V> implements MutableValueGraph<N, V> {
    constructor(builder: AbstractGraphBuilder<N>)
    // private incidentEdgeOrder: ElementOrder<N>;
    addNode(node: N): boolean;
    // private addNodeInternal(node: N): GraphConnections<N, V>;
    incidentEdgeOrder(): ElementOrder<N>;
    // private newConnections(): GraphConnections<N, V>;
    putEdgeValue(nodeU: N, nodeV: N, value: V): V;
    putEdgeValue(endpoints: N[], value: V): V;
    removeEdge(nodeU: N, nodeV: N): V;
    removeEdge(endpoints: N[]): V;
    removeNode(node: N): boolean;
}