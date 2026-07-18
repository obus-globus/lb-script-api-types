import type { ConfigOrigin } from '../../../../com/typesafe/config/ConfigOrigin.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export abstract class Tokens$Comment extends Token {
    constructor(arg0: ConfigOrigin, arg1: string)
    // private text: string;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    text(): string;
    toString(): string;
}