import type { BitSet } from '../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
import type { Parser } from '../../../../org/antlr/v4/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../org/antlr/v4/runtime/Recognizer.d.ts'
import type { DFA } from '../../../../org/antlr/v4/runtime/dfa/DFA.d.ts'
export interface ANTLRErrorListener extends Object{
    reportAmbiguity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: boolean, arg5: BitSet, arg6: (Object | null)[]): void;
    reportAttemptingFullContext(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: BitSet, arg5: (Object | null)[]): void;
    reportContextSensitivity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): void;
    syntaxError(arg0: Recognizer<Object, any>, arg1: Object, arg2: number, arg3: number, arg4: string, arg5: RecognitionException): void;
}