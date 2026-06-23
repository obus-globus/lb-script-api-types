import type { AbstractBaseGraph } from '../../../../com/google/common/graph/AbstractBaseGraph.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { ValueGraph } from '../../../../com/google/common/graph/ValueGraph.d.ts'
import type { Optional } from '../../../../java/util/Optional.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractValueGraph<N extends unknown, V extends unknown> extends AbstractBaseGraph<N> implements ValueGraph<N, V> {
    constructor()
    asGraph(): Graph<N>;
    edgeValue(nodeU: N, nodeV: N): Optional<V>;
    edgeValue(endpoints: N[]): Optional<V>;
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}