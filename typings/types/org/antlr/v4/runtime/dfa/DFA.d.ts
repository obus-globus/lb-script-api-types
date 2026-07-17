import type { JavaMap } from '../../../../../JavaMap.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vocabulary } from '../../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { DecisionState } from '../../../../../org/antlr/v4/runtime/atn/DecisionState.d.ts'
import type { DFAState } from '../../../../../org/antlr/v4/runtime/dfa/DFAState.d.ts'
export class DFA extends Object {
    constructor(arg0: DecisionState)
    constructor(arg0: DecisionState, arg1: number)
    atnStartState: DecisionState;
    decision: number;
    readonly precedenceDfa: boolean;
    s0: DFAState;
    readonly states: JavaMap<DFAState, DFAState>;
    getPrecedenceStartState(arg0: number): DFAState;
    getStates(): DFAState[];
    isPrecedenceDfa(): boolean;
    setPrecedenceDfa(arg0: boolean): void;
    setPrecedenceStartState(arg0: number, arg1: DFAState): void;
    toLexerString(): string;
    toString(): string;
    toString(arg0: string[]): string;
    toString(arg0: Vocabulary): string;
}