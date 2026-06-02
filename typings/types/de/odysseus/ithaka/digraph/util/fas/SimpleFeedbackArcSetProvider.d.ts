import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { AbstractFeedbackArcSetProvider } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/AbstractFeedbackArcSetProvider.d.ts'
export class SimpleFeedbackArcSetProvider extends AbstractFeedbackArcSetProvider {
    constructor()
    constructor(arg0: number)
    // private copies(arg0: Digraph<V>, arg1: number): Digraph<V>[];
    lfas(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
}