import type { DFA } from '../../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
import type { DFASerializer } from '../../../../../org/antlr/v4/runtime/dfa/DFASerializer.d.ts'
export class LexerDFASerializer extends DFASerializer {
    constructor(arg0: DFA)
    getEdgeLabel(arg0: number): string;
}