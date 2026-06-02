import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { DecisionEventInfo } from '../../../../../org/antlr/v4/runtime/atn/DecisionEventInfo.d.ts'
export class LookaheadEventInfo extends DecisionEventInfo {
    constructor(arg0: number, arg1: (Object | null)[], arg2: number, arg3: TokenStream, arg4: number, arg5: number, arg6: boolean)
    predictedAlt: number;
}