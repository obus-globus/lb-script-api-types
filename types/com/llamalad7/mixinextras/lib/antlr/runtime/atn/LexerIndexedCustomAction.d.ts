import type { Lexer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerAction.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LexerIndexedCustomAction extends Object implements LexerAction {
    constructor(arg0: number, arg1: LexerAction)
    readonly action: LexerAction;
    readonly offset: number;
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer): void;
    getAction(): LexerAction;
    getOffset(): number;
    hashCode(): number;
    isPositionDependent(): boolean;
}