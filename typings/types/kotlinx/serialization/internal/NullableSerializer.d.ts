import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class NullableSerializer<T extends unknown> extends Object implements KSerializer<T> {
    constructor(serializer: KSerializer<T>)
    readonly descriptor: SerialDescriptor;
    // private serializer: KSerializer<T>;
    deserialize(decoder: Decoder): T | null;
    equals(other: Object | null): boolean;
    hashCode(): number;
    serialize(encoder: Encoder, value: T | null): void;
}