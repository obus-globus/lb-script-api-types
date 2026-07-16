import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TokenKind extends Enum<TokenKind> {
    static BINARY: TokenKind;
    static BRACKET: TokenKind;
    static CONTEXTUAL: TokenKind;
    static FUTURE: TokenKind;
    static FUTURESTRICT: TokenKind;
    static IR: TokenKind;
    static KEYWORD: TokenKind;
    static LITERAL: TokenKind;
    static SPECIAL: TokenKind;
    static UNARY: TokenKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramname: string): TokenKind;
    static values(): TokenKind[];
    private constructor()
    name(): "SPECIAL" | "UNARY" | "BINARY" | "BRACKET" | "KEYWORD" | "LITERAL" | "IR" | "FUTURE" | "FUTURESTRICT" | "CONTEXTUAL";
}