import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { CollectionLikeSerializer } from '../../../kotlinx/serialization/internal/CollectionLikeSerializer.d.ts'
import type { PrimitiveArrayBuilder } from '../../../kotlinx/serialization/internal/PrimitiveArrayBuilder.d.ts'
export abstract class PrimitiveArraySerializer<Element extends Object | number | string | boolean, Array extends Object | number | string | boolean, Builder extends PrimitiveArrayBuilder<Array>> extends CollectionLikeSerializer<Element, Array, Builder> {
    constructor(primitiveSerializer: KSerializer<Element>)
    readonly descriptor: SerialDescriptor;
    protected builder(): Builder;
    deserialize(decoder: Decoder): Array;
    protected empty(): Array;
    protected readElement(decoder: CompositeDecoder, index: number, builder: Builder, checkIndex: boolean): void;
    serialize(encoder: Encoder, value: Array): void;
    protected writeContent(encoder: CompositeEncoder, content: Array, size: number): void;
}