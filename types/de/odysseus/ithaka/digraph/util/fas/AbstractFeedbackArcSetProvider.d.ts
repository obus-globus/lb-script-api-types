import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { AbstractFeedbackArcSetProvider$FeedbackTask } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/AbstractFeedbackArcSetProvider$FeedbackTask.d.ts'
import type { FeedbackArcSet } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSet.d.ts'
import type { FeedbackArcSetPolicy } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSetPolicy.d.ts'
import type { FeedbackArcSetProvider } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSetProvider.d.ts'
import type { ExecutorService } from '../../../../../../java/util/concurrent/ExecutorService.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export abstract class AbstractFeedbackArcSetProvider extends Object implements FeedbackArcSetProvider {
    constructor()
    constructor(arg0: number)
    // private executor: ExecutorService;
    // private executeAll(arg0: AbstractFeedbackArcSetProvider$FeedbackTask<V>[]): FeedbackArcSet<V>[];
    // private fas(arg0: Digraph<V>, arg1: EdgeWeights<V>, arg2: FeedbackArcSetPolicy): FeedbackArcSet<V>;
    getFeedbackArcSet(arg0: Digraph<V>, arg1: EdgeWeights<V>, arg2: FeedbackArcSetPolicy): FeedbackArcSet<V>;
    lfas(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
    mfas(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
    totalWeight(arg0: Digraph<V>, arg1: EdgeWeights<V>): number;
}