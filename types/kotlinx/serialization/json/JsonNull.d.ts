import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { JsonElement$Companion } from '../../../kotlinx/serialization/json/JsonElement$Companion.d.ts'
import type { JsonPrimitive } from '../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
import type { JsonPrimitive$Companion } from '../../../kotlinx/serialization/json/JsonPrimitive$Companion.d.ts'
export class JsonNull extends JsonPrimitive {
    static Companion: JsonElement$Companion;
    static Companion: JsonPrimitive$Companion;
    static INSTANCE: JsonNull;
    readonly content: string;
    /*not mapped: */ isString(): boolean;
    serializer(): KSerializer<JsonNull>;
}