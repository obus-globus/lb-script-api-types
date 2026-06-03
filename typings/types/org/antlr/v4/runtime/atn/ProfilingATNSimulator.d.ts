import type { BitSet } from '../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../org/antlr/v4/runtime/ParserRuleContext.d.ts'
import type { TokenStream } from '../../../../../org/antlr/v4/runtime/TokenStream.d.ts'
import type { DecisionInfo } from '../../../../../org/antlr/v4/runtime/atn/DecisionInfo.d.ts'
import type { ParserATNSimulator } from '../../../../../org/antlr/v4/runtime/atn/ParserATNSimulator.d.ts'
import type { SemanticContext } from '../../../../../org/antlr/v4/runtime/atn/SemanticContext.d.ts'
import type { DFA } from '../../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../org/antlr/v4/runtime/dfa/DFAState.d.ts'
import type { DFAState$PredPrediction } from '../../../../../org/antlr/v4/runtime/dfa/DFAState$PredPrediction.d.ts'
export class ProfilingATNSimulator extends ParserATNSimulator {
    static ERROR: DFAState;
    static TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT: boolean;
    static debug: boolean;
    static dfa_debug: boolean;
    static retry_debug: boolean;
    static trace_atn_sim: boolean;
    static getSafeEnv(paramarg0: string): string;
    constructor(arg0: Parser)
    // private _llStopIndex: number;
    // private _sllStopIndex: number;
    // private conflictingAltResolvedBySLL: number;
    // private currentDecision: number;
    currentState: DFAState;
    // private decisions: DecisionInfo[];
    // private numDecisions: number;
    adaptivePredict(arg0: TokenStream, arg1: number, arg2: ParserRuleContext): number;
    computeReachSet(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[];
    computeTargetState(arg0: DFA, arg1: DFAState, arg2: number): DFAState;
    evalSemanticContext(arg0: DFAState$PredPrediction[], arg1: ParserRuleContext, arg2: boolean): BitSet;
    evalSemanticContext(arg0: SemanticContext, arg1: ParserRuleContext, arg2: number, arg3: boolean): boolean;
    getCurrentState(): DFAState;
    getDecisionInfo(): DecisionInfo[];
    getExistingTargetState(arg0: DFAState, arg1: number): DFAState;
    reportAmbiguity(arg0: DFA, arg1: DFAState, arg2: number, arg3: number, arg4: boolean, arg5: BitSet, arg6: (Object | null)[]): void;
    reportAttemptingFullContext(arg0: DFA, arg1: BitSet, arg2: (Object | null)[], arg3: number, arg4: number): void;
    reportContextSensitivity(arg0: DFA, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number): void;
}