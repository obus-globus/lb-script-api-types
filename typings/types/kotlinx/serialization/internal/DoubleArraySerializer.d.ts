import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { DoubleArrayBuilder } from '../../../kotlinx/serialization/internal/DoubleArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class DoubleArraySerializer extends PrimitiveArraySerializer<number, number[], DoubleArrayBuilder> implements KSerializer<number[]> {
    static INSTANCE: DoubleArraySerializer;
    protected empty(): number[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: DoubleArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: number[], size: number): void;
}