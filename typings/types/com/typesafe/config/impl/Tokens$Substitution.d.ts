import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tokens$Substitution extends Token {
    constructor(arg0: ConfigOrigin, arg1: boolean, arg2: Token[])
    // private optional: boolean;
    // private value: Token[];
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    optional(): boolean;
    toString(): string;
    tokenText(): string;
    value(): Token[];
}