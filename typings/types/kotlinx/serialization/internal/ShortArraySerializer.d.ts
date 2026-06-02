import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
import type { ShortArrayBuilder } from '../../../kotlinx/serialization/internal/ShortArrayBuilder.d.ts'
export class ShortArraySerializer extends PrimitiveArraySerializer<number, number[], ShortArrayBuilder> implements KSerializer<number[]> {
    static INSTANCE: ShortArraySerializer;
    protected empty(): number[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: ShortArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: number[], size: number): void;
}