import type { CharStream } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerAction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LexerActionExecutor extends Object {
    static append(paramarg0: LexerActionExecutor, paramarg1: LexerAction): LexerActionExecutor;
    constructor(arg0: LexerAction[])
    // private hashCode: number;
    // private lexerActions: LexerAction[];
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer, arg1: CharStream, arg2: number): void;
    fixOffsetBeforeMatch(arg0: number): LexerActionExecutor;
    hashCode(): number;
}