import type { Lexer } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerAction.d.ts'
import type { LexerActionType } from '../../../../../../../com/llamalad7/mixinextras/lib/antlr/runtime/atn/LexerActionType.d.ts'
import type { Object } from '../../../../../../../java/lang/Object.d.ts'
export class LexerChannelAction extends Object implements LexerAction {
    constructor(arg0: number)
    // private channel: number;
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer): void;
    getActionType(): LexerActionType;
    hashCode(): number;
    isPositionDependent(): boolean;
    toString(): string;
}