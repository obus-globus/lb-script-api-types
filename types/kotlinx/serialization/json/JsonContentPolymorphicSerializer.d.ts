import type { Object } from '../../../java/lang/Object.d.ts'
import type { KClass } from '../../../kotlin/reflect/KClass.d.ts'
import type { DeserializationStrategy } from '../../../kotlinx/serialization/DeserializationStrategy.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { JsonElement } from '../../../kotlinx/serialization/json/JsonElement.d.ts'
export abstract class JsonContentPolymorphicSerializer<T extends Object | number | string | boolean> extends Object implements KSerializer<T> {
    constructor(baseClass: KClass<T>)
    // private baseClass: KClass<T>;
    readonly descriptor: SerialDescriptor;
    deserialize(decoder: Decoder): T;
    protected selectDeserializer(element: JsonElement): DeserializationStrategy<T>;
    serialize(encoder: Encoder, value: T): void;
    // private throwSubtypeNotRegistered(subClass: KClass<Object>, baseClass: KClass<Object>): void;
}