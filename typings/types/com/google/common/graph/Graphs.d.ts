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
    static copyOf<N extends unknown, E extends unknown>(paramnetwork: Network<N, E>): MutableNetwork<N, E>;
    static copyOf<N extends unknown, V extends unknown>(paramgraph: ValueGraph<N, V>): MutableValueGraph<N, V>;
    static copyOf<N extends unknown>(paramgraph: Graph<N>): MutableGraph<N>;
    static hasCycle<N extends unknown>(paramgraph: Graph<N>): boolean;
    static hasCycle(paramnetwork: Network<Object, Object>): boolean;
    static inducedSubgraph<N extends unknown, E extends unknown>(paramnetwork: Network<N, E>, paramnodes: N[]): MutableNetwork<N, E>;
    static inducedSubgraph<N extends unknown, V extends unknown>(paramgraph: ValueGraph<N, V>, paramnodes: N[]): MutableValueGraph<N, V>;
    static inducedSubgraph<N extends unknown>(paramgraph: Graph<N>, paramnodes: N[]): MutableGraph<N>;
    static reachableNodes<N extends unknown>(paramgraph: Graph<N>, paramnode: N): N[];
    static transitiveClosure<N extends unknown>(paramgraph: Graph<N>): Graph<N>;
    static transitiveClosure<N extends unknown>(paramgraph: Graph<N>): ImmutableGraph<N>;
    static transitiveClosure<N extends unknown>(paramgraph: Graph<N>, paramstrategy: Graphs$TransitiveClosureSelfLoopStrategy): ImmutableGraph<N>;
    static transpose<N extends unknown, E extends unknown>(paramnetwork: Network<N, E>): Network<N, E>;
    static transpose<N extends unknown, V extends unknown>(paramgraph: ValueGraph<N, V>): ValueGraph<N, V>;
    static transpose<N extends unknown>(paramgraph: Graph<N>): Graph<N>;
    private constructor()
}