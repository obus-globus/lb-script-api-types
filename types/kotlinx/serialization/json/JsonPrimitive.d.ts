import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
import type { JsonElement$Companion } from '../../../kotlinx/serialization/json/JsonElement$Companion.d.ts'
import type { JsonPrimitive$Companion } from '../../../kotlinx/serialization/json/JsonPrimitive$Companion.d.ts'
export class JsonPrimitive extends JsonElement {
    static Companion: JsonElement$Companion;
    static Companion: JsonPrimitive$Companion;
    protected constructor()
    readonly content: string;
    /*not mapped: */ isString(): boolean;
    toString(): string;
}