import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { UnmodifiableDigraph } from '../../../../../../de/odysseus/ithaka/digraph/UnmodifiableDigraph.d.ts'
import type { FeedbackArcSetPolicy } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSetPolicy.d.ts'
import type { OptionalInt } from '../../../../../../java/util/OptionalInt.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class FeedbackArcSet<V extends unknown> extends UnmodifiableDigraph<V> {
    static UNIT_WEIGHT: OptionalInt;
    static UNIT_WEIGHTS: EdgeWeights<Object>;
    static empty<V extends unknown>(paramarg0: FeedbackArcSetPolicy): FeedbackArcSet<V>;
    constructor(arg0: Digraph<V>, arg1: number, arg2: FeedbackArcSetPolicy, arg3: boolean)
    readonly exact: boolean;
    readonly policy: FeedbackArcSetPolicy;
    readonly weight: number;
    getPolicy(): FeedbackArcSetPolicy;
    getWeight(): number;
    isExact(): boolean;
}