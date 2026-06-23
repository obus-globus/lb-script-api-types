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
    // private executeAll<V extends unknown>(arg0: AbstractFeedbackArcSetProvider$FeedbackTask<V>[]): FeedbackArcSet<V>[];
    // private fas<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>, arg2: FeedbackArcSetPolicy): FeedbackArcSet<V>;
    getFeedbackArcSet<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>, arg2: FeedbackArcSetPolicy): FeedbackArcSet<V>;
    lfas<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
    mfas<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
    totalWeight<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>): number;
}