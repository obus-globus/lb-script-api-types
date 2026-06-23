import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { SerialDescriptor } from '../../../kotlinx/serialization/descriptors/SerialDescriptor.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
import type { AbstractCollectionSerializer } from '../../../kotlinx/serialization/internal/AbstractCollectionSerializer.d.ts'
export class CollectionLikeSerializer<Element extends unknown, Collection extends unknown, Builder extends unknown> extends AbstractCollectionSerializer<Element, Collection, Builder> {
    protected constructor(elementSerializer: KSerializer<Element>)
    readonly descriptor: SerialDescriptor;
    // private elementSerializer: KSerializer<Element>;
    protected readAll(decoder: CompositeDecoder, builder: Builder, startIndex: number, size: number): void;
    protected readElement(decoder: CompositeDecoder, index: number, builder: Builder, checkIndex: boolean): void;
    serialize(encoder: Encoder, value: Collection): void;
}