import type { Vocabulary } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { DecisionState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/DecisionState.d.ts'
import type { DFAState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFA extends Object {
    constructor(arg0: DecisionState, arg1: number)
    atnStartState: DecisionState;
    decision: number;
    readonly precedenceDfa: boolean;
    s0: DFAState;
    readonly states: Map<DFAState, DFAState>;
    getPrecedenceStartState(arg0: number): DFAState;
    getStates(): DFAState[];
    isPrecedenceDfa(): boolean;
    setPrecedenceStartState(arg0: number, arg1: DFAState): void;
    toString(): string;
    toString(arg0: Vocabulary): string;
}