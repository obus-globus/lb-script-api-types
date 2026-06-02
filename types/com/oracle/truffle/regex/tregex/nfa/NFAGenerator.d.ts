import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { ASTStep } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTStep.d.ts'
import type { ASTStepVisitor } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTStepVisitor.d.ts'
import type { ASTTransitionCanonicalizer } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/ASTTransitionCanonicalizer.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAGenerator$NFAStateID } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAGenerator$NFAStateID.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { EconomicMap } from '../../../../../../org/graalvm/collections/EconomicMap.d.ts'
export class NFAGenerator extends Object {
    static createNFA(paramast: RegexAST, paramcompilationBuffer: CompilationBuffer): NFA;
    private constructor(ast: RegexAST, compilationBuffer: CompilationBuffer)
    // private advancedInitialState: NFAState;
    // private anchoredEntries: NFAStateTransition[];
    // private anchoredFinalState: NFAState;
    // private anchoredInitialStates: NFAState[];
    // private anchoredReverseEntry: NFAStateTransition;
    // private ast: RegexAST;
    // private astStepVisitor: ASTStepVisitor;
    // private astTransitionCanonicalizer: ASTTransitionCanonicalizer;
    // private compilationBuffer: CompilationBuffer;
    // private dummyInitialState: NFAState;
    // private expansionQueue: NFAState[];
    // private finalState: NFAState;
    // private initialLoopBack: NFAStateTransition;
    // private initialStates: NFAState[];
    // private lastGroup: number;
    // private nfaStates: Map<NFAGenerator$NFAStateID, NFAState>;
    // private prefixStates: NFAState[];
    // private stateID: Counter$ThresholdCounter;
    // private transitionGBClearIndices: number[];
    // private transitionGBUpdateIndices: number[];
    // private transitionID: Counter$ThresholdCounter;
    // private transitionsBuffer: NFAStateTransition[];
    // private unAnchoredEntries: NFAStateTransition[];
    // private unAnchoredReverseEntry: NFAStateTransition;
    // private addNewLoopBackTransition(source: NFAState, target: NFAState): void;
    // private clearGroupBoundaries(): void;
    // private createFinalState(stateSet: S[], mustAdvance: boolean): NFAState;
    // private createNFATransitions(sourceState: NFAState, nextStep: ASTStep): NFAStateTransition[];
    // private createTransition(source: NFAState, target: NFAState, codePointSet: (Object | null)[], constraints: number[], operations: number[]): NFAStateTransition;
    // private doCreateNFA(): NFA;
    // private expandNFAState(curState: NFAState): void;
    // private findDeadStates(deadStates: NFAState[]): void;
    // private needsReverseTransitions(s: NFAState): boolean;
    // private pruneDeadStates(): void;
    // private registerMatcherState(stateSetCC: S[], finishedLookBehinds: S[], containsPrefixStates: boolean, mustAdvance: boolean, matchedConditionGroupsMap: EconomicMap<number, number[]>): NFAState;
}