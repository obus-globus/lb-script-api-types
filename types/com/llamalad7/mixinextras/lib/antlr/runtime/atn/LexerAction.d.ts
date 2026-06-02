import type { Lexer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export interface LexerAction extends Object{
    execute(arg0: Lexer): void;
    isPositionDependent(): boolean;
}