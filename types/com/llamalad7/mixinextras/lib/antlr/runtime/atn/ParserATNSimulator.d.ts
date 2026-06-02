import type { NoViableAltException } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/NoViableAltException.d.ts'
import type { Parser } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { ParserRuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ParserRuleContext.d.ts'
import type { RuleContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RuleContext.d.ts'
import type { TokenStream } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/TokenStream.d.ts'
import type { ATN } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATN.d.ts'
import type { ATNConfig } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNConfig.d.ts'
import type { ATNSimulator } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNSimulator.d.ts'
import type { ATNState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ATNState.d.ts'
import type { ActionTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/ActionTransition.d.ts'
import type { DecisionState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/DecisionState.d.ts'
import type { PrecedencePredicateTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PrecedencePredicateTransition.d.ts'
import type { PredicateTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredicateTransition.d.ts'
import type { PredictionContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContext.d.ts'
import type { PredictionContextCache } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionContextCache.d.ts'
import type { PredictionMode } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/PredictionMode.d.ts'
import type { RuleTransition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/RuleTransition.d.ts'
import type { SemanticContext } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/SemanticContext.d.ts'
import type { Transition } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/Transition.d.ts'
import type { DFA } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState.d.ts'
import type { DFAState$PredPrediction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState$PredPrediction.d.ts'
import type { DoubleKeyMap } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/DoubleKeyMap.d.ts'
import type { Pair } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/misc/Pair.d.ts'
import type { BitSet } from '../../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class ParserATNSimulator extends ATNSimulator {
    static ERROR: DFAState;
    static TURN_OFF_LR_LOOP_ENTRY_BRANCH_OPT: boolean;
    static debug: boolean;
    static dfa_debug: boolean;
    static retry_debug: boolean;
    static trace_atn_sim: boolean;
    static getSafeEnv(paramarg0: string): string;
    constructor(arg0: Parser, arg1: ATN, arg2: DFA[], arg3: PredictionContextCache)
    // private _dfa: DFA;
    // private _input: TokenStream;
    // private _outerContext: ParserRuleContext;
    // private _startIndex: number;
    decisionToDFA: DFA[];
    // private mergeCache: DoubleKeyMap<PredictionContext, PredictionContext, PredictionContext>;
    // private mode: PredictionMode;
    // private parser: Parser;
    actionTransition(arg0: ATNConfig, arg1: ActionTransition): ATNConfig;
    adaptivePredict(arg0: TokenStream, arg1: number, arg2: ParserRuleContext): number;
    addDFAEdge(arg0: DFA, arg1: DFAState, arg2: number, arg3: DFAState): DFAState;
    addDFAState(arg0: DFA, arg1: DFAState): DFAState;
    applyPrecedenceFilter(arg0: (Object | null)[]): (Object | null)[];
    canDropLoopEntryEdgeInLeftRecursiveRule(arg0: ATNConfig): boolean;
    closure(arg0: ATNConfig, arg1: (Object | null)[], arg2: ATNConfig[], arg3: boolean, arg4: boolean, arg5: boolean): void;
    closureCheckingStopState(arg0: ATNConfig, arg1: (Object | null)[], arg2: ATNConfig[], arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): void;
    closure_(arg0: ATNConfig, arg1: (Object | null)[], arg2: ATNConfig[], arg3: boolean, arg4: boolean, arg5: number, arg6: boolean): void;
    computeReachSet(arg0: (Object | null)[], arg1: number, arg2: boolean): (Object | null)[];
    computeStartState(arg0: ATNState, arg1: RuleContext, arg2: boolean): (Object | null)[];
    computeTargetState(arg0: DFA, arg1: DFAState, arg2: number): DFAState;
    evalSemanticContext(arg0: SemanticContext, arg1: ParserRuleContext, arg2: number, arg3: boolean): boolean;
    evalSemanticContext(arg0: DFAState$PredPrediction[], arg1: ParserRuleContext, arg2: boolean): BitSet;
    execATN(arg0: DFA, arg1: DFAState, arg2: TokenStream, arg3: number, arg4: ParserRuleContext): number;
    execATNWithFullContext(arg0: DFA, arg1: DFAState, arg2: (Object | null)[], arg3: TokenStream, arg4: number, arg5: ParserRuleContext): number;
    getAltThatFinishedDecisionEntryRule(arg0: (Object | null)[]): number;
    getConflictingAlts(arg0: (Object | null)[]): BitSet;
    getConflictingAltsOrUniqueAlt(arg0: (Object | null)[]): BitSet;
    getEpsilonTarget(arg0: ATNConfig, arg1: Transition, arg2: boolean, arg3: boolean, arg4: boolean, arg5: boolean): ATNConfig;
    getExistingTargetState(arg0: DFAState, arg1: number): DFAState;
    getLookaheadName(arg0: TokenStream): string;
    getPredicatePredictions(arg0: BitSet, arg1: SemanticContext[]): DFAState$PredPrediction[];
    getPredsForAmbigAlts(arg0: BitSet, arg1: (Object | null)[], arg2: number): SemanticContext[];
    getReachableTarget(arg0: Transition, arg1: number): ATNState;
    getRuleName(arg0: number): string;
    getSynValidOrSemInvalidAltThatFinishedDecisionEntryRule(arg0: (Object | null)[], arg1: ParserRuleContext): number;
    getTokenName(arg0: number): string;
    noViableAlt(arg0: TokenStream, arg1: ParserRuleContext, arg2: (Object | null)[], arg3: number): NoViableAltException;
    precedenceTransition(arg0: ATNConfig, arg1: PrecedencePredicateTransition, arg2: boolean, arg3: boolean, arg4: boolean): ATNConfig;
    predTransition(arg0: ATNConfig, arg1: PredicateTransition, arg2: boolean, arg3: boolean, arg4: boolean): ATNConfig;
    predicateDFAState(arg0: DFAState, arg1: DecisionState): void;
    removeAllConfigsNotInRuleStopState(arg0: (Object | null)[], arg1: boolean): (Object | null)[];
    reportAmbiguity(arg0: DFA, arg1: DFAState, arg2: number, arg3: number, arg4: boolean, arg5: BitSet, arg6: (Object | null)[]): void;
    reportAttemptingFullContext(arg0: DFA, arg1: BitSet, arg2: (Object | null)[], arg3: number, arg4: number): void;
    reportContextSensitivity(arg0: DFA, arg1: number, arg2: (Object | null)[], arg3: number, arg4: number): void;
    reset(): void;
    ruleTransition(arg0: ATNConfig, arg1: RuleTransition): ATNConfig;
    splitAccordingToSemanticValidity(arg0: (Object | null)[], arg1: ParserRuleContext): Pair<(Object | null)[], (Object | null)[]>;
}