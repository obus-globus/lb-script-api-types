import type { StateSetToIntMap } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateSetToIntMap.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFAGenerator$StateMapping extends Object {
    private constructor(states: S[])
    readonly mapping: StateSetToIntMap<NFAState, NFAStateTransition>;
    // private states: S[];
    // private createMapping(): StateSetToIntMap<NFAState, NFAStateTransition>;
    getMapping(): StateSetToIntMap<NFAState, NFAStateTransition>;
    // private getMappingOrDefault(): StateSetToIntMap<NFAState, NFAStateTransition>;
    // private hasMapping(): boolean;
}