import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
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
    static valueOf(paramarg0: Class<Object>, paramarg1: string): Object | null;
    static valueOf(paramname: string): TokenKind;
    static values(): (Object | null)[];
    private constructor()
    name(): "SPECIAL" | "UNARY" | "BINARY" | "BRACKET" | "KEYWORD" | "LITERAL" | "IR" | "FUTURE" | "FUTURESTRICT" | "CONTEXTUAL";
}