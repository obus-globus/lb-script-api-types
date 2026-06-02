import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { ByteArrayBuilder } from '../../../kotlinx/serialization/internal/ByteArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class ByteArraySerializer extends PrimitiveArraySerializer<number, number[], ByteArrayBuilder> implements KSerializer<number[]> {
    static INSTANCE: ByteArraySerializer;
    protected empty(): number[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: ByteArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: number[], size: number): void;
}