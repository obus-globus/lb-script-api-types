import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
export class TokenType extends Enum<TokenType> {
    static CLOSE_CURLY: TokenType;
    static CLOSE_SQUARE: TokenType;
    static COLON: TokenType;
    static COMMA: TokenType;
    static COMMENT: TokenType;
    static END: TokenType;
    static EQUALS: TokenType;
    static IGNORED_WHITESPACE: TokenType;
    static NEWLINE: TokenType;
    static OPEN_CURLY: TokenType;
    static OPEN_SQUARE: TokenType;
    static PLUS_EQUALS: TokenType;
    static PROBLEM: TokenType;
    static START: TokenType;
    static SUBSTITUTION: TokenType;
    static UNQUOTED_TEXT: TokenType;
    static VALUE: TokenType;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TokenType;
    static values(): TokenType[];
    private constructor()
    name(): "START" | "END" | "COMMA" | "EQUALS" | "COLON" | "OPEN_CURLY" | "CLOSE_CURLY" | "OPEN_SQUARE" | "CLOSE_SQUARE" | "VALUE" | "NEWLINE" | "UNQUOTED_TEXT" | "IGNORED_WHITESPACE" | "SUBSTITUTION" | "PROBLEM" | "COMMENT" | "PLUS_EQUALS";
}