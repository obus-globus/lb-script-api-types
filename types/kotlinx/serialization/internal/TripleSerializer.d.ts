import type { Object } from '../../../java/lang/Object.d.ts'
import type { Triple } from '../../../kotlin/Triple.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class TripleSerializer<A extends Object | number | string | boolean, B extends Object | number | string | boolean, C extends Object | number | string | boolean> extends Object implements KSerializer<Triple<A, B, C>> {
    constructor(aSerializer: KSerializer<A>, bSerializer: KSerializer<B>, cSerializer: KSerializer<C>)
    // private aSerializer: KSerializer<A>;
    // private bSerializer: KSerializer<B>;
    // private cSerializer: KSerializer<C>;
    readonly descriptor: SerialDescriptor;
    // private decodeSequentially(composite: CompositeDecoder): Triple<A, B, C>;
    // private decodeStructure(composite: CompositeDecoder): Triple<A, B, C>;
    deserialize(decoder: Decoder): Triple<A, B, C>;
    serialize(encoder: Encoder, value: Triple<A, B, C>): void;
}