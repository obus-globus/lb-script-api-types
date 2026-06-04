import type { JsonElement } from '../../../../../com/viaversion/viaversion/libs/gson/JsonElement.d.ts'
import type { JsonPrimitive } from '../../../../../com/viaversion/viaversion/libs/gson/JsonPrimitive.d.ts'
import type { Object } from '../../../../../java/lang/Object.d.ts'
import type { Number } from '../../../../../java/lang/Number.d.ts'
import type { Map$Entry } from '../../../../../java/util/Map$Entry.d.ts'
export class JsonObject extends JsonElement {
    constructor()
    // private members: { [key: string]: JsonElement };
    add(arg0: string, arg1: JsonElement): void;
    addProperty(arg0: string, arg1: boolean): void;
    addProperty(arg0: string, arg1: string): void;
    addProperty(arg0: string, arg1: Number): void;
    asMap(): { [key: string]: JsonElement };
    deepCopy(): JsonObject;
    entrySet(): Map$Entry<string, JsonElement>[];
    equals(arg0: Object | null): boolean;
    get(arg0: string): JsonElement;
    getAsJsonArray(): JsonElement[];
    getAsJsonArray(arg0: string): JsonElement[];
    getAsJsonObject(): JsonObject;
    getAsJsonObject(arg0: string): JsonObject;
    getAsJsonPrimitive(): JsonPrimitive;
    getAsJsonPrimitive(arg0: string): JsonPrimitive;
    has(arg0: string): boolean;
    hashCode(): number;
    isEmpty(): boolean;
    keySet(): string[];
    remove(arg0: string): JsonElement;
    size(): number;
}