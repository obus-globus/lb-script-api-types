import type { Object } from '../../../java/lang/Object.d.ts'
import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { Decoder } from '../../../kotlinx/serialization/encoding/Decoder.d.ts'
import type { Encoder } from '../../../kotlinx/serialization/encoding/Encoder.d.ts'
export class AbstractCollectionSerializer<Element extends Object | number | string | boolean, Collection extends Object | number | string | boolean, Builder extends Object | number | string | boolean> extends Object implements KSerializer<Collection> {
    protected constructor()
    protected builder(): Builder;
    deserialize(decoder: Decoder): Collection;
    merge(decoder: Decoder, previous: Collection | null): Collection;
    protected readAll(decoder: CompositeDecoder, builder: Builder, startIndex: number, size: number): void;
    protected readElement(decoder: CompositeDecoder, index: number, builder: Builder, checkIndex: boolean): void;
    // private readSize(decoder: CompositeDecoder, builder: Builder): number;
    serialize(encoder: Encoder, value: Collection): void;
}