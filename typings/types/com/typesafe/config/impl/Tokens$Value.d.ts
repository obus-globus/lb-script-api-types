import type { AbstractConfigValue } from '../../../../com/typesafe/config/impl/AbstractConfigValue.d.ts'
import type { Token } from '../../../../com/typesafe/config/impl/Token.d.ts'
import type { Object } from '../../../../java/lang/Object.d.ts'
export class Tokens$Value extends Token {
    constructor(arg0: AbstractConfigValue)
    constructor(arg0: AbstractConfigValue, arg1: string)
    // private value: AbstractConfigValue;
    canEqual(arg0: Object): boolean;
    equals(arg0: Object | null): boolean;
    hashCode(): number;
    toString(): string;
    value(): AbstractConfigValue;
}