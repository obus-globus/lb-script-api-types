import type { Object } from '../../java/lang/Object.d.ts'
import type { KClass } from '../../kotlin/reflect/KClass.d.ts'
import type { KSerializer } from '../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { SerializersModule } from '../../kotlinx/serialization/modules/SerializersModule.d.ts'
export class ContextualSerializer<T extends unknown> extends Object implements KSerializer<T> {
    constructor(serializableClass: KClass<T>)
    constructor(serializableClass: KClass<T>, fallbackSerializer: KSerializer<T> | null, typeArgumentsSerializers: KSerializer<Object>[])
    readonly descriptor: SerialDescriptor;
    // private fallbackSerializer: KSerializer<T> | null;
    // private serializableClass: KClass<T>;
    // private typeArgumentsSerializers: KSerializer<Object>[];
    deserialize(decoder: Decoder): T;
    serialize(encoder: Encoder, value: T): void;
    // private serializer(serializersModule: SerializersModule): KSerializer<T>;
}