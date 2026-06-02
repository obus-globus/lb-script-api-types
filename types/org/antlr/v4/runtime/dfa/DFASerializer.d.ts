import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Vocabulary } from '../../../../../org/antlr/v4/runtime/Vocabulary.d.ts'
import type { DFA } from '../../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../org/antlr/v4/runtime/dfa/DFAState.d.ts'
export class DFASerializer extends Object {
    constructor(arg0: DFA, arg1: string[])
    constructor(arg0: DFA, arg1: Vocabulary)
    // private dfa: DFA;
    // private vocabulary: Vocabulary;
    getEdgeLabel(arg0: number): string;
    getStateString(arg0: DFAState): string;
    toString(): string;
}