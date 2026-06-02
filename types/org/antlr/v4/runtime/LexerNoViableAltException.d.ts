import type { Object } from '../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { RecognitionException } from '../../../../org/antlr/v4/runtime/RecognitionException.d.ts'
export class LexerNoViableAltException extends RecognitionException {
    constructor(arg0: Lexer, arg1: CharStream, arg2: number, arg3: (Object | null)[])
    readonly deadEndConfigs: (Object | null)[];
    readonly startIndex: number;
    getDeadEndConfigs(): (Object | null)[];
    getInputStream(): CharStream;
    getStartIndex(): number;
    toString(): string;
}