import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { DecisionEventInfo } from '../../../../../org/antlr/v4/runtime/atn/DecisionEventInfo.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
export class PredicateEvalInfo extends DecisionEventInfo {
    constructor(arg0: number, arg1: TokenStream, arg2: number, arg3: number, arg4: SemanticContext, arg5: boolean, arg6: number, arg7: boolean)
    evalResult: boolean;
    predictedAlt: number;
    semctx: SemanticContext;
}