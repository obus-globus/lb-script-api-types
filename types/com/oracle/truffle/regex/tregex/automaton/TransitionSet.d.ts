import type { AbstractState } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractState.d.ts'
import type { AbstractTransition } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/AbstractTransition.d.ts'
import type { StateIndex } from '../../../../../../com/oracle/truffle/regex/tregex/automaton/StateIndex.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class TransitionSet<SI extends StateIndex<S>, S extends AbstractState<S, T>, T extends AbstractTransition<S, T>> extends Object {
    constructor(transitions: T[], targetStateSet: S[])
    readonly targetStateSet: S[];
    readonly transitions: T[];
    getTargetStateSet(): S[];
    getTransition(i: number): T;
    getTransitions(): T[];
    isEmpty(): boolean;
    size(): number;
    toString(): string;
}