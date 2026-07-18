import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tokens$Line extends Token {
    constructor(arg0: ConfigOrigin)
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    tokenText(): string;
}