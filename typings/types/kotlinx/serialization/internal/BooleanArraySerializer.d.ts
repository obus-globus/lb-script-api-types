import type { KSerializer } from '../../../kotlinx/serialization/KSerializer.d.ts'
import type { CompositeDecoder } from '../../../kotlinx/serialization/encoding/CompositeDecoder.d.ts'
import type { CompositeEncoder } from '../../../kotlinx/serialization/encoding/CompositeEncoder.d.ts'
import type { BooleanArrayBuilder } from '../../../kotlinx/serialization/internal/BooleanArrayBuilder.d.ts'
import type { PrimitiveArraySerializer } from '../../../kotlinx/serialization/internal/PrimitiveArraySerializer.d.ts'
export class BooleanArraySerializer extends PrimitiveArraySerializer<boolean, boolean[], BooleanArrayBuilder> implements KSerializer<boolean[]> {
    static INSTANCE: BooleanArraySerializer;
    protected empty(): boolean[];
    protected readElement(decoder: CompositeDecoder, index: number, builder: BooleanArrayBuilder, checkIndex: boolean): void;
    protected writeContent(encoder: CompositeEncoder, content: boolean[], size: number): void;
}