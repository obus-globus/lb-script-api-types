import type { Object } from '../../../java/lang/Object.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export class JsonObjectBuilder extends Object {
    constructor()
    // private content: { [key: string]: JsonElement };
    build(): JsonObject;
    put(key: string, element: JsonElement): JsonElement | null;
}