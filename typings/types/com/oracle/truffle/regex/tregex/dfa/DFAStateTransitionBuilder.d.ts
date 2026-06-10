import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { TransitionBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionBuilder.d.ts'
import type { TransitionSet } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/TransitionSet.d.ts'
import type { DFAStateNodeBuilder } from '../../../../../../com/oracle/truffle/regex/tregex/dfa/DFAStateNodeBuilder.d.ts'
import type { NFA } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFA.d.ts'
import type { NFAState } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAState.d.ts'
import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { JsonConvertible } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonConvertible.d.ts'
import type { JsonValue } from '../../../../../../com/oracle/truffle/regex/tregex/util/json/JsonValue.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class DFAStateTransitionBuilder extends TransitionBuilder<NFA, NFAState, NFAStateTransition> implements AbstractTransition<DFAStateNodeBuilder, DFAStateTransitionBuilder>, JsonConvertible {
    constructor(transitionSet: TransitionSet<NFA, NFAState, NFAStateTransition>, matcherBuilder: (Object | null)[], constraints: number[], operations: number[])
    constructor(transitions: NFAStateTransition[], targetStateSet: NFAState[], matcherBuilder: (Object | null)[], constraints: number[], operations: number[])
    readonly id: number;
    readonly source: DFAStateNodeBuilder;
    readonly target: DFAStateNodeBuilder;
    getBqSuccessor(): number;
    getId(): number;
    getSource(): DFAStateNodeBuilder;
    getTarget(forward: boolean): DFAStateNodeBuilder;
    getTarget(): DFAStateNodeBuilder;
    setId(id: number): void;
    setSource(source: DFAStateNodeBuilder): void;
    setTarget(target: DFAStateNodeBuilder): void;
    toJson(): JsonValue;
    toString(): string;
}