import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
import type { LexerActionType } from '../../../../../org/antlr/v4/runtime/atn/LexerActionType.d.ts'
export class LexerIndexedCustomAction extends Object implements LexerAction {
    constructor(arg0: number, arg1: LexerAction)
    readonly action: LexerAction;
    readonly offset: number;
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer): void;
    getAction(): LexerAction;
    getActionType(): LexerActionType;
    getOffset(): number;
    hashCode(): number;
    isPositionDependent(): boolean;
}