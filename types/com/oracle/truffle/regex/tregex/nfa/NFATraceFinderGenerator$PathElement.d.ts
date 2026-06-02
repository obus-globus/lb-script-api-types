import type { NFAStateTransition } from '../../../../../../com/oracle/truffle/regex/tregex/nfa/NFAStateTransition.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class NFATraceFinderGenerator$PathElement extends Object {
    private constructor(transition: NFAStateTransition)
    // private i: number;
    readonly transition: NFAStateTransition;
    getNextTransition(): NFAStateTransition;
    getTransition(): NFAStateTransition;
    hasNextTransition(): boolean;
}