import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { StringBuilder } from '../../../../java/lang/StringBuilder.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tokenizer$TokenIterator$WhitespaceSaver extends Object {
    constructor()
    // private lastTokenWasSimpleValue: boolean;
    // private whitespace: StringBuilder;
    add(arg0: number): void;
    check(arg0: Token, arg1: ConfigOrigin, arg2: number): Token;
    // private createWhitespaceTokenFromSaver(arg0: ConfigOrigin, arg1: number): Token;
    // private nextIsASimpleValue(arg0: ConfigOrigin, arg1: number): Token;
    // private nextIsNotASimpleValue(arg0: ConfigOrigin, arg1: number): Token;
}