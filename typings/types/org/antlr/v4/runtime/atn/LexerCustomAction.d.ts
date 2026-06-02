import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
import type { LexerActionType } from '../../../../../org/antlr/v4/runtime/atn/LexerActionType.d.ts'
export class LexerCustomAction extends Object implements LexerAction {
    constructor(arg0: number, arg1: number)
    readonly actionIndex: number;
    readonly ruleIndex: number;
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer): void;
    getActionIndex(): number;
    getActionType(): LexerActionType;
    getRuleIndex(): number;
    hashCode(): number;
    isPositionDependent(): boolean;
}