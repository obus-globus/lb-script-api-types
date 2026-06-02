import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { BigDecimal } from '../../../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
import type { GsonPrimitive } from '../../../../../net/lenni0451/commons/gson/elements/GsonPrimitive.d.ts'
export class GsonElement extends Object {
    static wrap(paramarg0: JsonElement): GsonElement;
    constructor(arg0: JsonElement)
    // private element: JsonElement;
    asArray(): GsonElement[];
    asBigDecimal(): BigDecimal;
    asBigInteger(): BigInteger;
    asBoolean(): boolean;
    asByte(): number;
    asDouble(): number;
    asFloat(): number;
    asInt(): number;
    asLong(): number;
    asNumber(): Number;
    asObject(): Map$Entry<string, GsonElement>[];
    asPrimitive(): GsonPrimitive;
    asShort(): number;
    asString(): string;
    deepCopy(): GsonElement;
    equals(arg0: Object | null): boolean;
    getJsonElement(): JsonElement;
    hashCode(): number;
    isArray(): boolean;
    isNull(): boolean;
    isObject(): boolean;
    isPrimitive(): boolean;
    toString(): string;
}