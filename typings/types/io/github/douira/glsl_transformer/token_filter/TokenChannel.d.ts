import type { Class } from '../../../../../java/lang/Class.d.ts'
import type { Enum } from '../../../../../java/lang/Enum.d.ts'
import type { Token } from '../../../../../org/antlr/v4/runtime/Token.d.ts'
export class TokenChannel extends Enum<TokenChannel> {
    static COMMENTS: TokenChannel;
    static DEFAULT: TokenChannel;
    static HIDDEN: TokenChannel;
    static PREPROCESSOR: TokenChannel;
    static WHITESPACE: TokenChannel;
    static getTokenChannel(paramarg0: Token): TokenChannel;
    static valueOf<T extends Enum<T>>(paramarg0: Class<T>, paramarg1: string): T;
    static valueOf(paramarg0: string): TokenChannel;
    static values(): TokenChannel[];
    private constructor()
    name(): "DEFAULT" | "HIDDEN" | "WHITESPACE" | "COMMENTS" | "PREPROCESSOR";
}