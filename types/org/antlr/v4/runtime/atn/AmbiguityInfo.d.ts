import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { DecisionEventInfo } from '../../../../../org/antlr/v4/runtime/atn/DecisionEventInfo.d.ts'
export class AmbiguityInfo extends DecisionEventInfo {
    constructor(arg0: number, arg1: (Object | null)[], arg2: BitSet, arg3: TokenStream, arg4: number, arg5: number, arg6: boolean)
    ambigAlts: BitSet;
}