import type { Digraph } from '../../../../../../de/odysseus/ithaka/digraph/Digraph.d.ts'
import type { EdgeWeights } from '../../../../../../de/odysseus/ithaka/digraph/EdgeWeights.d.ts'
import type { AbstractFeedbackArcSetProvider } from '../../../../../../de/odysseus/ithaka/digraph/util/fas/AbstractFeedbackArcSetProvider.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class SimpleFeedbackArcSetProvider extends AbstractFeedbackArcSetProvider {
    constructor()
    constructor(arg0: number)
    // private copies<V extends unknown>(arg0: Digraph<V>, arg1: number): Digraph<V>[];
    lfas<V extends unknown>(arg0: Digraph<V>, arg1: EdgeWeights<V>): Digraph<V>;
}