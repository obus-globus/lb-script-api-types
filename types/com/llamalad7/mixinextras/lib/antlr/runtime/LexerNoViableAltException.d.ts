import type { CharStream } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { RecognitionException } from '../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/RecognitionException.d.ts'
import type { Object } from '../../../../../../java/lang/Object.d.ts'
export class LexerNoViableAltException extends RecognitionException {
    constructor(arg0: Lexer, arg1: CharStream, arg2: number, arg3: (Object | null)[])
    // private deadEndConfigs: (Object | null)[];
    // private startIndex: number;
    getInputStream(): CharStream;
    toString(): string;
}