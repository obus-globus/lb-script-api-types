import type { Class } from '../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../java/lang/Enum.d.ts'
import type { TokenKind$Tag } from '../../../../team/unnamed/mocha/lexer/TokenKind$Tag.d.ts'
export class TokenKind extends Enum<TokenKind> {
    static AMPAMP: TokenKind;
    static ARROW: TokenKind;
    static BANG: TokenKind;
    static BANGEQ: TokenKind;
    static BARBAR: TokenKind;
    static BREAK: TokenKind;
    static COLON: TokenKind;
    static COMMA: TokenKind;
    static CONTINUE: TokenKind;
    static DOT: TokenKind;
    static EOF: TokenKind;
    static EQ: TokenKind;
    static EQEQ: TokenKind;
    static ERROR: TokenKind;
    static FALSE: TokenKind;
    static FLOAT: TokenKind;
    static GT: TokenKind;
    static GTE: TokenKind;
    static IDENTIFIER: TokenKind;
    static LBRACE: TokenKind;
    static LBRACKET: TokenKind;
    static LPAREN: TokenKind;
    static LT: TokenKind;
    static LTE: TokenKind;
    static PLUS: TokenKind;
    static QUES: TokenKind;
    static QUESQUES: TokenKind;
    static RBRACE: TokenKind;
    static RBRACKET: TokenKind;
    static RETURN: TokenKind;
    static RPAREN: TokenKind;
    static SEMICOLON: TokenKind;
    static SLASH: TokenKind;
    static STAR: TokenKind;
    static STRING: TokenKind;
    static SUB: TokenKind;
    static TRUE: TokenKind;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TokenKind;
    static values(): TokenKind[];
    private constructor()
    private constructor(...arg2: TokenKind$Tag[])
    // private tags: TokenKind$Tag[];
    hasTag(arg0: TokenKind$Tag): boolean;
    name(): "EOF" | "ERROR" | "IDENTIFIER" | "STRING" | "FLOAT" | "TRUE" | "FALSE" | "BREAK" | "CONTINUE" | "RETURN" | "DOT" | "BANG" | "AMPAMP" | "BARBAR" | "LT" | "LTE" | "GT" | "GTE" | "EQ" | "EQEQ" | "BANGEQ" | "STAR" | "SLASH" | "PLUS" | "SUB" | "LPAREN" | "RPAREN" | "LBRACE" | "RBRACE" | "QUESQUES" | "QUES" | "COLON" | "ARROW" | "LBRACKET" | "RBRACKET" | "COMMA" | "SEMICOLON";
}