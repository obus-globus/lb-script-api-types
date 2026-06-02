import type { Object } from '../../../java/lang/Object.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { JsonElement$Companion } from '../../../kotlinx/serialization/json/JsonElement$Companion.d.ts'
import type { JsonPrimitive } from '../../../kotlinx/serialization/json/JsonPrimitive.d.ts'
import type { JsonPrimitive$Companion } from '../../../kotlinx/serialization/json/JsonPrimitive$Companion.d.ts'
export class JsonLiteral extends JsonPrimitive {
    static Companion: JsonElement$Companion;
    static Companion: JsonPrimitive$Companion;
    constructor(body: Object, isString: boolean, coerceToInlineType: SerialDescriptor | null)
    // private coerceToInlineType: SerialDescriptor | null;
    /*not mapped: */ getCoerceToInlineType$kotlinx_serialization_json(): SerialDescriptor | null;
    readonly content: string;
    // private isString: boolean;
    /*not mapped: */ isString(): boolean;
    equals(other: Object | null): boolean;
    hashCode(): number;
    toString(): string;
}