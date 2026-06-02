import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { AmbiguityInfo } from '../../../../../org/antlr/v4/runtime/atn/AmbiguityInfo.d.ts'
import type { ContextSensitivityInfo } from '../../../../../org/antlr/v4/runtime/atn/ContextSensitivityInfo.d.ts'
import type { ErrorInfo } from '../../../../../org/antlr/v4/runtime/atn/ErrorInfo.d.ts'
import type { LookaheadEventInfo } from '../../../../../org/antlr/v4/runtime/atn/LookaheadEventInfo.d.ts'
import type { PredicateEvalInfo } from '../../../../../org/antlr/v4/runtime/atn/PredicateEvalInfo.d.ts'
export class DecisionInfo extends Object {
    constructor(arg0: number)
    LL_ATNTransitions: number;
    LL_DFATransitions: number;
    LL_Fallback: number;
    LL_MaxLook: number;
    LL_MaxLookEvent: LookaheadEventInfo;
    LL_MinLook: number;
    LL_TotalLook: number;
    SLL_ATNTransitions: number;
    SLL_DFATransitions: number;
    SLL_MaxLook: number;
    SLL_MaxLookEvent: LookaheadEventInfo;
    SLL_MinLook: number;
    SLL_TotalLook: number;
    ambiguities: AmbiguityInfo[];
    contextSensitivities: ContextSensitivityInfo[];
    decision: number;
    errors: ErrorInfo[];
    invocations: number;
    predicateEvals: PredicateEvalInfo[];
    timeInPrediction: number;
    toString(): string;
}