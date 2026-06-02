import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { LongArrayBuilder } from '../../../kotlinx/serialization/internal/LongArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class LongArraySerializer extends PrimitiveArraySerializer<number, number[], LongArrayBuilder> implements KSerializer<number[]> {
    static INSTANCE: LongArraySerializer;
    protected empty(): number[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: LongArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: number[], size: number): void;
}