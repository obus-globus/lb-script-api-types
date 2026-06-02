import type { JsonElement } from '../../../../../com/google/gson/JsonElement.d.ts'
import type { JsonObject } from '../../../../../com/google/gson/JsonObject.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
export class JsonUtils extends Object {
    static ensureContains(paramarg0: JsonObject, paramarg1: (Object | null)[]): void;
    static ensureContainsArray(paramarg0: JsonObject, paramarg1: string): JsonElement[];
    static ensureContainsBoolean(paramarg0: JsonObject, paramarg1: string): boolean;
    static ensureContainsFloat(paramarg0: JsonObject, paramarg1: string): number;
    static ensureContainsInt(paramarg0: JsonObject, paramarg1: string): number;
    static ensureContainsObject(paramarg0: JsonObject, paramarg1: string): JsonObject;
    static ensureContainsString(paramarg0: JsonObject, paramarg1: string): string;
    static ensureContainsStringArray(paramarg0: JsonObject, paramarg1: string): (Object | null)[];
    static ensureRootObject(paramarg0: JsonElement, paramarg1: string): JsonObject;
    static hasNonNull(paramarg0: JsonObject, paramarg1: string): boolean;
    constructor()
}