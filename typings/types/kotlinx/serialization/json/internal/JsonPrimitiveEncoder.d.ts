import type { Function1 } from '../../../../kotlin/jvm/functions/Function1.d.ts'
import type { Json } from '../../../../kotlinx/serialization/json/Json.d.ts'
import type { JsonElement } from '../../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { AbstractJsonTreeEncoder } from '../../../../kotlinx/serialization/json/internal/AbstractJsonTreeEncoder.d.ts'
export class JsonPrimitiveEncoder extends AbstractJsonTreeEncoder {
    constructor(json: Json, nodeConsumer: Function1<JsonElement, void>)
    // private content: JsonElement | null;
    getCurrent(): JsonElement;
    putElement(key: string, element: JsonElement): void;
}