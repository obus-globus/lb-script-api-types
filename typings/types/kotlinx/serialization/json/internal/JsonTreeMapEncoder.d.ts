import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonTreeEncoder } from '../../../../kotlinx/serialization/json/internal/JsonTreeEncoder.d.ts'
export class JsonTreeMapEncoder extends JsonTreeEncoder {
    constructor(json: Json, nodeConsumer: Function1<JsonElement, void>)
    // private isKey: boolean;
    // private tag: string;
    getCurrent(): JsonElement;
    putElement(key: string, element: JsonElement): void;
}