import type { JsonNull } from '../../../com/google/gson/JsonNull.d.ts'
import type { JsonObject } from '../../../com/google/gson/JsonObject.d.ts'
import type { JsonPrimitive } from '../../../com/google/gson/JsonPrimitive.d.ts'
import type { BigDecimal } from '../../../java/math/BigDecimal.d.ts'
import type { BigInteger } from '../../../java/math/BigInteger.d.ts'
import type { Object } from '../../../java/lang/Object.d.ts'
import type { Number } from '../../../java/lang/Number.d.ts'
export abstract class JsonElement extends Object {
    constructor()
    deepCopy(): JsonElement;
    getAsBigDecimal(): BigDecimal;
    getAsBigInteger(): BigInteger;
    getAsBoolean(): boolean;
    getAsByte(): number;
    getAsCharacter(): string;
    getAsDouble(): number;
    getAsFloat(): number;
    getAsInt(): number;
    getAsJsonArray(): JsonElement[];
    getAsJsonNull(): JsonNull;
    getAsJsonObject(): JsonObject;
    getAsJsonPrimitive(): JsonPrimitive;
    getAsLong(): number;
    getAsNumber(): Number;
    getAsShort(): number;
    getAsString(): string;
    isJsonArray(): boolean;
    isJsonNull(): boolean;
    isJsonObject(): boolean;
    isJsonPrimitive(): boolean;
    toString(): string;
}