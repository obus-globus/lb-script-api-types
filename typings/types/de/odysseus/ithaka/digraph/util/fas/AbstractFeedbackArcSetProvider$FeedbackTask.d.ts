import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { FeedbackArcSet } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSet.d.ts'
import type { FeedbackArcSetPolicy } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSetPolicy.d.ts'
import type { Callable } from '../../../../../../java/util/concurrent/Callable.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class AbstractFeedbackArcSetProvider$FeedbackTask<V extends unknown> extends Object implements Callable<FeedbackArcSet<V>> {
    constructor(null_: AbstractFeedbackArcSetProvider$FeedbackTask<V>, arg2: EdgeWeights<V>, arg3: FeedbackArcSetPolicy, arg4: V[])
    // private digraph: Digraph<V>;
    // private policy: FeedbackArcSetPolicy;
    // private scc: V[];
    // private weights: EdgeWeights<V>;
    call(): FeedbackArcSet<V>;
}