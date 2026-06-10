import type { StateTransitionCanonicalizer } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateTransitionCanonicalizer.d.ts'
import type { DFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { DFAStateTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateTransitionBuilder.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFATransitionCanonicalizer extends StateTransitionCanonicalizer<NFA, NFAState, NFAStateTransition, DFAStateTransitionBuilder> {
    constructor(dfaGen: DFAGenerator)
    // private dfaGen: DFAGenerator;
    canMerge(a: DFAStateTransitionBuilder, b: DFAStateTransitionBuilder): boolean;
    createResultArray(size: number): DFAStateTransitionBuilder[];
    createTransitionArray(size: number): NFAStateTransition[];
    createTransitionBuilder(transitions: NFAStateTransition[], targetStateSet: NFAState[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[]): DFAStateTransitionBuilder;
}