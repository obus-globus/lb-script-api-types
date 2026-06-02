import type { NodeCost } from '../../../../com/oracle/truffle/api/nodes/NodeCost.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class TruffleOptions extends Object {
    static AOT: boolean;
    static DetailedRewriteReasons: boolean;
    static TraceRewrites: boolean;
    static TraceRewritesFilterClass: string;
    static TraceRewritesFilterFromCost: NodeCost;
    static TraceRewritesFilterToCost: NodeCost;
    private constructor()
}