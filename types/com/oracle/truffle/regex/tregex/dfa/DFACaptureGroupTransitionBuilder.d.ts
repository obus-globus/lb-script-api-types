import type { StateSetToIntMap } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateSetToIntMap.d.ts'
import type { TransitionSet } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionSet.d.ts'
import type { CompilationBuffer } from '../../../../../../com/oracle/truffle/regex/tregex/buffer/CompilationBuffer.d.ts'
import type { DFACaptureGroupLazyTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFACaptureGroupLazyTransitionBuilder.d.ts'
import type { DFAGenerator } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAGenerator.d.ts'
import type { DFAStateTransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateTransitionBuilder.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { DFACaptureGroupPartialTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nodes/dfa/DFACaptureGroupPartialTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFACaptureGroupTransitionBuilder extends DFAStateTransitionBuilder {
    constructor(transitions: TransitionSet<NFA, NFAState, NFAStateTransition>, matcherBuilder: (Object | null)[], constraints: number[], operations: number[], dfaGen: DFAGenerator)
    constructor(transitions: NFAStateTransition[], targetStateSet: S[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[], dfaGen: DFAGenerator)
    // private dfaGen: DFAGenerator;
    // private lazyTransitionBuilder: DFACaptureGroupLazyTransitionBuilder;
    // private requiredStates: S[];
    // private requiredStatesIndexMap: StateSetToIntMap<NFAState, NFAStateTransition>;
    // private createPartialTransition(targetStates: S[], targetStatesIndexMap: StateSetToIntMap<NFAState, NFAStateTransition>, compilationBuffer: CompilationBuffer): DFACaptureGroupPartialTransition;
    // private getRequiredStates(): S[];
    // private getRequiredStatesIndexMap(): StateSetToIntMap<NFAState, NFAStateTransition>;
    setLazyTransition(lazyTransition: DFACaptureGroupLazyTransitionBuilder): void;
    // private skipReorder(): boolean;
    toLazyTransitionBuilder(compilationBuffer: CompilationBuffer): DFACaptureGroupLazyTransitionBuilder;
}