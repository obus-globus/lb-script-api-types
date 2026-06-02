import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { LexerActionType } from '../../../../../org/antlr/v4/runtime/atn/LexerActionType.d.ts'
export interface LexerAction extends Object{
    execute(arg0: Lexer): void;
    getActionType(): LexerActionType;
    isPositionDependent(): boolean;
}