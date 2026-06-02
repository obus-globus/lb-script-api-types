import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { FeedbackArcSet } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSet.d.ts'
import type { FeedbackArcSetPolicy } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/FeedbackArcSetPolicy.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export interface FeedbackArcSetProvider extends Object{
    getFeedbackArcSet(arg0: Digraph<V>, arg1: EdgeWeights<V>, arg2: FeedbackArcSetPolicy): FeedbackArcSet<V>;
}