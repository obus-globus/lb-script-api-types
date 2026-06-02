import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Lexer } from '../../../../../org/antlr/v4/runtime/Lexer.d.ts'
import type { LexerAction } from '../../../../../org/antlr/v4/runtime/atn/LexerAction.d.ts'
import type { LexerActionType } from '../../../../../org/antlr/v4/runtime/atn/LexerActionType.d.ts'
export class LexerSkipAction extends Object implements LexerAction {
    static INSTANCE: LexerSkipAction;
    private constructor()
    equals(arg0: Object | null): boolean;
    execute(arg0: Lexer): void;
    getActionType(): LexerActionType;
    hashCode(): number;
    isPositionDependent(): boolean;
    toString(): string;
}