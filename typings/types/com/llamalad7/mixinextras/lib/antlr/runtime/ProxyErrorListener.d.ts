import type { ANTLRErrorListener } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/ANTLRErrorListener.d.ts'
import type { Parser } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Parser.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Recognizer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Recognizer.d.ts'
import type { DFA } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/dfa/DFA.d.ts'
import type { BitSet } from '../../../../../../java/util/BitSet.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class ProxyErrorListener extends Object implements ANTLRErrorListener {
    constructor(arg0: ANTLRErrorListener[])
    // private delegates: ANTLRErrorListener[];
    reportAmbiguity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: boolean, arg5: BitSet, arg6: (Object | null)[]): void;
    reportAttemptingFullContext(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: BitSet, arg5: (Object | null)[]): void;
    reportContextSensitivity(arg0: Parser, arg1: DFA, arg2: number, arg3: number, arg4: number, arg5: (Object | null)[]): void;
    syntaxError(arg0: Recognizer<Object, any>, arg1: Object, arg2: number, arg3: number, arg4: string, arg5: RecognitionException): void;
}