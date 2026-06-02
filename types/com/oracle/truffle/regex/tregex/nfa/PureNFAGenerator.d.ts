import type { PureNFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFA.d.ts'
import type { PureNFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFAState.d.ts'
import type { PureNFATransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransition.d.ts'
import type { PureNFATransitionGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/PureNFATransitionGenerator.d.ts'
import type { Counter$ThresholdCounter } from '../../../../../../com/oracle/truffle/regex/tregex/parser/Counter$ThresholdCounter.d.ts'
import type { RegexAST } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexAST.d.ts'
import type { RegexASTSubtreeRootNode } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/RegexASTSubtreeRootNode.d.ts'
import type { Term } from '../../../../../../com/oracle/truffle/regex/tregex/parser/ast/Term.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class PureNFAGenerator extends Object {
    static mapToNFA(paramast: RegexAST): PureNFA;
    private constructor(ast: RegexAST)
    readonly anchoredFinalState: PureNFAState;
    readonly anchoredInitialState: PureNFAState;
    // private ast: RegexAST;
    // private expansionQueue: PureNFAState[];
    // private nfaStates: PureNFAState[];
    // private stateID: Counter$ThresholdCounter;
    // private transitionGen: PureNFATransitionGenerator;
    // private transitionID: Counter$ThresholdCounter;
    readonly unAnchoredFinalState: PureNFAState;
    readonly unAnchoredInitialState: PureNFAState;
    // private createAnchoredInitialState(astNode: Term): PureNFAState;
    // private createEmptyTransition(src: PureNFAState, tgt: PureNFAState): PureNFATransition;
    // private createFinalState(astNode: Term, enqueue: boolean): PureNFAState;
    // private createInitialState(astNode: Term): PureNFAState;
    // private createNFA(root: RegexASTSubtreeRootNode): PureNFA;
    // private createUnAnchoredInitialState(astNode: Term): PureNFAState;
    // private expandAllStates(): void;
    // private expandNFAState(curState: PureNFAState): void;
    getAnchoredFinalState(): PureNFAState;
    getAnchoredInitialState(): PureNFAState;
    getOrCreateState(t: Term): PureNFAState;
    getTransitionIdCounter(): Counter$ThresholdCounter;
    getUnAnchoredFinalState(): PureNFAState;
    getUnAnchoredInitialState(): PureNFAState;
}