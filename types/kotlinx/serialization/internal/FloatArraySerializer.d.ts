import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { FloatArrayBuilder } from '../../../kotlinx/serialization/internal/FloatArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class FloatArraySerializer extends PrimitiveArraySerializer<number, number[], FloatArrayBuilder> implements KSerializer<number[]> {
    static INSTANCE: FloatArraySerializer;
    protected empty(): number[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: FloatArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: number[], size: number): void;
}