import type { Object } from '../../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../../java/lang/Number.d.ts'
import type { JsonObject } from '../../../../../../org/spongepowered/include/com/google/gson/JsonObject.d.ts'
import type { JsonPrimitive } from '../../../../../../org/spongepowered/include/com/google/gson/JsonPrimitive.d.ts'
export abstract class JsonElement extends Object {
    constructor()
    getAsBoolean(): boolean;
    getAsBooleanWrapper(): boolean;
    getAsDouble(): number;
    getAsInt(): number;
    getAsJsonArray(): JsonElement[];
    getAsJsonObject(): JsonObject;
    getAsJsonPrimitive(): JsonPrimitive;
    getAsLong(): number;
    getAsNumber(): Number;
    getAsString(): string;
    isJsonArray(): boolean;
    isJsonNull(): boolean;
    isJsonObject(): boolean;
    isJsonPrimitive(): boolean;
    toString(): string;
}