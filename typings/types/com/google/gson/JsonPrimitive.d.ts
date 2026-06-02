import type { JsonElement } from '../../../com/google/gson/JsonElement.d.ts'
import type { BigDecimal } from '../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export class JsonPrimitive extends JsonElement {
    constructor(arg0: boolean)
    constructor(arg0: string)
    constructor(arg0: Number)
    constructor(arg0: string)
    // private value: Object;
    deepCopy(): JsonPrimitive;
    equals(arg0: Object | null): boolean;
    getAsBigDecimal(): BigDecimal;
    getAsBigInteger(): BigInteger;
    getAsBoolean(): boolean;
    getAsByte(): number;
    getAsCharacter(): string;
    getAsDouble(): number;
    getAsFloat(): number;
    getAsInt(): number;
    getAsLong(): number;
    getAsNumber(): Number;
    getAsShort(): number;
    getAsString(): string;
    hashCode(): number;
    isBoolean(): boolean;
    isNumber(): boolean;
    isString(): boolean;
}