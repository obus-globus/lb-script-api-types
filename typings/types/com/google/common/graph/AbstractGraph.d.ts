import type { AbstractBaseGraph } from '../../../../com/google/common/graph/AbstractBaseGraph.d.ts'
import type { Graph } from '../../../../com/google/common/graph/Graph.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class AbstractGraph<N extends Object | number | string | boolean> extends AbstractBaseGraph<N> implements Graph<N> {
    constructor()
    equals(obj: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}