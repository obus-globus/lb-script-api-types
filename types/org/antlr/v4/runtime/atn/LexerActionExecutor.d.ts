import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { CharStream } from '../../../../../org/antlr/v4/runtime/CharStream.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
export class LexerActionExecutor extends Object {
    static append(paramarg0: LexerActionExecutor, paramarg1: LexerAction): LexerActionExecutor;
    constructor(arg0: LexerAction[])
    // private hashCode: number;
    readonly lexerActions: LexerAction[];
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer, arg1: CharStream, arg2: number): void;
    fixOffsetBeforeMatch(arg0: number): LexerActionExecutor;
    getLexerActions(): LexerAction[];
    hashCode(): number;
}