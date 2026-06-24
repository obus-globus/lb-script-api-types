import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Graphs$TransitiveClosureSelfLoopStrategy } from '../../../../com/google/common/graph/Graphs$TransitiveClosureSelfLoopStrategy.d.ts'
import type { GraphsBridgeMethods } from '../../../../com/google/common/graph/GraphsBridgeMethods.d.ts'
import type { ImmutableGraph } from '../../../../com/google/common/graph/ImmutableGraph.d.ts'
import type { MutableGraph } from '../../../../com/google/common/graph/MutableGraph.d.ts'
import type { MutableNetwork } from '../../../../com/google/common/graph/MutableNetwork.d.ts'
import type { MutableValueGraph } from '../../../../com/google/common/graph/MutableValueGraph.d.ts'
import type { Network } from '../../../../com/google/common/graph/Network.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Graphs extends GraphsBridgeMethods {
    static copyOf(paramnetwork: Network<Object, Object>): MutableNetwork<Object, Object>;
    static copyOf(paramgraph: ValueGraph<Object, Object>): MutableValueGraph<Object, Object>;
    static copyOf(paramgraph: Graph<Object>): MutableGraph<Object>;
    static hasCycle(paramgraph: Graph<Object>): boolean;
    static hasCycle(paramnetwork: Network<Object, Object>): boolean;
    static inducedSubgraph(paramnetwork: Network<Object, Object>, paramnodes: (Object | null)[]): MutableNetwork<Object, Object>;
    static inducedSubgraph(paramgraph: ValueGraph<Object, Object>, paramnodes: (Object | null)[]): MutableValueGraph<Object, Object>;
    static inducedSubgraph(paramgraph: Graph<Object>, paramnodes: (Object | null)[]): MutableGraph<Object>;
    static reachableNodes(paramgraph: Graph<Object>, paramnode: Object | null): (Object | null)[];
    static reachableNodes(paramgraph: Graph<Object>, paramnode: Object | null): (Object | null)[];
    static transitiveClosure(paramgraph: Graph<Object>): Graph<Object>;
    static transitiveClosure(paramgraph: Graph<Object>): ImmutableGraph<Object>;
    static transitiveClosure(paramgraph: Graph<Object>, paramstrategy: Graphs$TransitiveClosureSelfLoopStrategy): ImmutableGraph<Object>;
    static transpose(paramnetwork: Network<Object, Object>): Network<Object, Object>;
    static transpose(paramgraph: ValueGraph<Object, Object>): ValueGraph<Object, Object>;
    static transpose(paramgraph: Graph<Object>): Graph<Object>;
    private constructor()
}