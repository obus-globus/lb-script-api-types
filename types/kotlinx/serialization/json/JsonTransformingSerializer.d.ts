import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export abstract class JsonTransformingSerializer<T extends Object | number | string | boolean> extends Object implements KSerializer<T> {
    constructor(tSerializer: KSerializer<T>)
    readonly descriptor: SerialDescriptor;
    // private tSerializer: KSerializer<T>;
    deserialize(decoder: Decoder): T;
    serialize(encoder: Encoder, value: T): void;
    protected transformDeserialize(element: JsonElement): JsonElement;
    protected transformSerialize(element: JsonElement): JsonElement;
}