import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { BaseErrorListener } from '../../../../org/antlr/v4/runtime/BaseErrorListener.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { DFA } from '../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
export class DiagnosticErrorListener extends BaseErrorListener {
    constructor()
    constructor(arg0: boolean)
    // private exactOnly: boolean;
    getConflictingAlts(arg0: BitSet, arg1: (Object | null)[]): BitSet;
    getDecisionDescription(arg0: Parser, arg1: DFA): string;
    reportAmbiguity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: boolean, arg5: BitSet, arg6: (Object | null)[]): void;
    reportAttemptingFullContext(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: BitSet, arg5: (Object | null)[]): void;
    reportContextSensitivity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): void;
}