import type { Vocabulary } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Vocabulary.d.ts'
import type { DFA } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFA.d.ts'
import type { DFAState } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFAState.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class DFASerializer extends Object {
    constructor(arg0: DFA, arg1: Vocabulary)
    // private dfa: DFA;
    // private vocabulary: Vocabulary;
    getEdgeLabel(arg0: number): string;
    getStateString(arg0: DFAState): string;
    toString(): string;
}